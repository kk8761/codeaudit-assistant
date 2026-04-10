const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

// In-memory data storage for code analysis results and user preferences
let codeAnalysisResults = [];
let userPreferences = {};

// Route to analyze code for security vulnerabilities and best practices
app.post('/api/analyze', async (req, res) => {
  try {
    const { code } = req.body;
    if (!code) {
      return res.status(400).json({ success: false, error: 'Code is required' });
    }

    // Simulate analysis process
    const analysisResults = await analyzeCode(code);
    codeAnalysisResults.push(analysisResults);

    res.json({ success: true, data: analysisResults });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Internal server error' });
  }
});

// Route to get API documentation
app.get('/api/docs', (req, res) => {
  res.sendFile(__dirname + '/public/api-docs.md');
});

// Mock function to simulate code analysis
async function analyzeCode(code) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const results = {
        vulnerabilities: [],
        bestPractices: []
      };
      // Simulate finding a security vulnerability and a best practice suggestion
      if (code.includes('console.log')) {
        results.vulnerabilities.push('Potential security risk: Logging sensitive data');
      }
      if (!code.includes('const')) {
        results.bestPractices.push('Best Practice: Use const for immutable variables');
      }
      resolve(results);
    }, 2000);
  });
}

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ success: false, error: 'Internal server error' });
});

app.listen(port, () => {
  console.log(`CodeAudit API running on port ${port}`);
});