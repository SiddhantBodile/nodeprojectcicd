const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send(`
    <html>
    <head>
      <style>
        body {
          background-color: #333; /* Dark background color */
          color: #fff; /* Text color */
          font-family: Arial, sans-serif;
        }
        .container {
          text-align: center;
          padding: 100px;
        }
        h1 {
          font-size: 3rem;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>Welcome to Siddhant Bodile's DevOps Engineer Page</h1>
        <p>This is an attractive page with custom styling.</p>
      </div>
    </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

