# CodeAudit: Your Personal Code Security Assistant 🛡️💻

[![Node.js](https://img.shields.io/badge/node.js-%3E%3D14.0.0-blue.svg)] [![License](https://img.shields.io/badge/license-MIT-green.svg)] [![GitHub stars](https://img.shields.io/github/stars/codeaudit/codeaudit?style=social)] [![GitHub forks](https://img.shields.io/github/forks/codeaudit/codeaudit?style=social)]

## Screenshot Alt Text

- **Home Page:** A clean and modern interface with a dark theme, featuring a card for code analysis results.
- **API Docs:** Markdown formatted documentation with detailed descriptions of endpoints.

## Features

- **Code Analysis:** Analyze your code for security vulnerabilities and best practices in minutes.
- **User Preferences:** Save and retrieve user preferences.
- **Dark Theme:** Enjoy a comfortable dark theme with a glassmorphic design.
- **Responsive Design:** Works seamlessly on all devices, from mobile to desktop.

## Quick Start

1. Clone the repository:
   ```sh
   git clone https://github.com/codeaudit/codeaudit.git
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Start the server:
   ```sh
   npm start
   ```

4. Open your browser and navigate to `http://localhost:3000`.

## API Docs

### Method: POST  
**Endpoint:** `/api/analyze`  
**Purpose:** Analyze code for security vulnerabilities and best practices.  
**Request Body:** 
```json
{
  "code": "const x = 1;"
}
```
**Response:** Analysis results in JSON format.

### Method: GET  
**Endpoint:** `/api/docs`  
**Purpose:** Get API documentation.  
**Response:** Markdown formatted API docs.

## Tech Stack

- **Backend:** Node.js (Express)
- **Frontend:** HTML, CSS, JavaScript
- **Dependencies:** cors, express, helmet, morgan, body-parser

## License

CodeAudit is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.

---