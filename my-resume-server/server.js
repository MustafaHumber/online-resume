const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 8000;

app.use(cors());

// Endpoints
app.get('/getEdu', (req, res) => {
  res.json([
    "Bachelor of Science in Computer Science, University of Toronto (2015-2019)",
    "Master of Technology, Institute of Toronto (2019-2021)"
  ]);
});

app.get('/getExp', (req, res) => {
  res.json([
    "Software Developer at Tech Solutions, Inc. (2021-2023)",
    "Frontend Developer at Creative Minds Mustafa (2019-2021)"
  ]);
});

app.get('/getOverview', (req, res) => {
  res.json("A passionate software developer with expertise in building dynamic web applications. Skilled in both frontend and backend technologies.");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
