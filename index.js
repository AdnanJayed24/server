import express from 'express';

// Read port from environment or default to 3000
const PORT = process.env.PORT || 3000;
const app   = express();

// A simple “Hello World” route
app.get('/', (req, res) => {
  res.send('Hello from Express on Vercel!');
});

// Start listening
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
