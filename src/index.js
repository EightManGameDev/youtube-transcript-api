import express from "express";
import TranscriptAPI from "./index.js";

const app = express();
const PORT = process.env.PORT || 3000;

console.log(`Server starting on port: ${PORT}`); // Debugging log

app.get('/get_transcript', async (req, res) => {
  const videoId = req.query.video_id;

  if (!videoId) {
    return res.status(400).send({ error: "Missing video_id parameter" });
  }

  try {
    const transcript = await TranscriptAPI.getTranscript(videoId);
    res.json(transcript);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});

app.get('/', (req, res) => {
  res.send('Server is running!');
});
