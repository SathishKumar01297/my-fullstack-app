const express = require('express');
const app = express();

// Serve static frontend files from the "public" folder
app.use(express.static('public'));

// BACKEND API ROUTE
app.get('/api/message', (req, res) => {
  res.json({ text: "Hello! This live data came directly from your Node.js BACKEND! 🚀" });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});