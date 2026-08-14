const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Tell Express to serve files from inside the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// API endpoint
app.get('/api/data', (req, res) => {
    res.json({ message: "Hello from Backend API!" });
});

// Serve index.html from inside the 'public' folder
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});