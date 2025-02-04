import express from "express";
import TranscriptAPI from "./index.js"; // Import the TranscriptAPI class

const app = express();

// Use the PORT from environment variables or default to 3000
const PORT = process.env.PORT || 3000;

// Define the /get_transcript endpoint
app.get('/get_transcript', async (req, res) => {
  const videoId = req.query.video_id;

  // Validate if video_id is provided
  if (!videoId) {
    return res.status(400).send({ error: "Missing video_id parameter" });
  }

  try {
    // Call the getTranscript method from TranscriptAPI
    const transcript = await TranscriptAPI.getTranscript(videoId);
    res.json(transcript);
  } catch (error) {
    // Handle errors gracefully
    res.status(500).send({ error: error.message });
  }
});

// Start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
