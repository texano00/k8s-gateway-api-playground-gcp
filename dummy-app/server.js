const http = require('http');
const fs = require('fs');

const version = fs.readFileSync('.version', 'utf8');

const server = http.createServer((req, res) => {
    // Set the content type to HTML
    res.setHeader('Content-Type', 'text/html');
    const backgroundColor = '#3498db'; // Set your desired background color here

    // Respond with a basic HTML page with a colored background
    res.end(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Colored Page</title>
        <style>
          body {
            background-color: ${backgroundColor};
            color: #fff; /* Set text color to contrast with the background */
            font-family: Arial, sans-serif;
            text-align: center;
            padding: 50px;
            margin: 0;
          }
        </style>
      </head>
      <body>
        <h1>Welcome to My Dummy Colored Page!</h1>
        <h2>${version}</h2>
      </body>
      </html>
    `);
  });
  
  const PORT = 3000;

  server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}/`);
  });