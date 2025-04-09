# Express Middleware Folder

This project contains useful **Express.js middleware** functions. Middleware helps handle different tasks in your web server like checking if users are logged in, limiting how many times someone can request, and more.

## 📁 Folder Structure

Project Structure:

middleware/
├── auth.js           → Checks if user is logged in (e.g. with token)
├── logger.js         → Logs incoming requests (method, URL, time)
├── rateLimiter.js    → Limits repeated requests from the same IP
└── validateUser.js   → Validates user input (e.g. signup form)

node_modules/          → Project dependencies (auto-generated)
package.json           → Project info and dependencies
package-lock.json      → Ensures consistent installs

## 📦 How to Use

1. **Install dependencies:**
   npm install

🛠 What Each File Does
auth.js – Checks if a user is logged in by verifying a token.

logger.js – Prints info about each request to the console.

rateLimiter.js – Limits how many times someone can hit your server.

validateUser.js – Makes sure the user input (like email or password) is correct.
