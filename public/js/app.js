// app.js

document.addEventListener('DOMContentLoaded', () => {
  const codeInput = document.getElementById('code-input');
  const analyzeButton = document.getElementById('analyze-button');
  const resultsContainer = document.getElementById('results-container');

  analyzeButton.addEventListener('click', async () => {
    const code = codeInput.value.trim();
    if (!code) {
      displayError('Code is required');
      return;
    }

    try {
      const response = await fetch('/api/analyze', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ code })
      });

      if (!response.ok) {
        throw new Error('Analysis failed');
      }

      const results = await response.json();
      displayResults(results);
    } catch (error) {
      displayError(error.message);
    }
  });

  function displayError(message) {
    resultsContainer.innerHTML = `
      <div class="card error">
        <p>${message}</p>
      </div>
    `;
  }

  function displayResults(results) {
    const { vulnerabilities, bestPractices } = results;
    let html = '';

    if (vulnerabilities.length > 0) {
      html += `
        <div class="card">
          <h2>Vulnerabilities</h2>
          <ul>
            ${vulnerabilities.map(v => `<li>${v}</li>`).join('')}
          </ul>
        </div>
      `;
    }

    if (bestPractices.length > 0) {
      html += `
        <div class="card">
          <h2>Best Practices</h2>
          <ul>
            ${bestPractices.map(bp => `<li>${bp}</li>`).join('')}
          </ul>
        </div>
      `;
    }

    resultsContainer.innerHTML = html;
  }
});