const express = require("express");
const { connectDB } = require("./connection/dbconn");
const app = express();
const MESSAGE_MODAL = require("./models/Message");
app.use(express.json());
require("dotenv").config();

app.post("/api/sendmessage", async (req, res) => {
  try {
    const { title, message } = req.body;
    const newMessage = new MESSAGE_MODAL({
      subject: title, // title:title
      message, // message:message
    });
    await newMessage.save();
    return res.json({ success: true, message: "Message sent anonymously" });
  } catch (error) {
    return res.status(400).json({ success: false, error: error.message });
  }
});

app.get("/api/messages", async (req, res) => {
  try {
    const messages = await MESSAGE_MODAL.find().sort({ createdAt: -1 });
    return res.json({ success: true, messages });
  } catch (error) {
    return res.status(400).json({ success: false, error: error.message });
  }
});

const port = process.env.PORT || 5000;
connectDB();
app.listen(port, () => console.log("Server is running at Port", port));
