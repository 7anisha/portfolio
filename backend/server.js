const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());


const URI = 'mongodb+srv://anishu2001:NFpKIJvaDV7qpBl6@cluster0.4dlpz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

mongoose
  .connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

// Define a schema for the contact form submissions
const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

// Create a model for the Contact collection
const Contact = mongoose.model("ContactPortfolio", contactSchema);

// Define the POST route to handle form submissions
app.post("/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const newContact = new Contact({ name, email, message });

    // Save the new contact to the database
    await newContact.save();

    res.status(200).json({ message: "Message saved successfully" });
  } catch (error) {
    console.error("Error saving message:", error);
    res.status(500).json({ message: "Error saving message" });
  }
});

// Start the server on port 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
