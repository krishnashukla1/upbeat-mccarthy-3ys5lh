const http = require("http");

const hostname = "127.0.0.1";
const port = 3000;

// Console log message with color and font styling
console.log(
  "%cHello CodeSandbox Krishna Shukla",
  "color: purple; font-size: 20px; background: yellow; padding: 5px;"
);

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");

  // HTML with enhanced CSS styles and hover effects
  res.end(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Welcome Page</title>
      <style>
        body {
          font-family: 'Poppins', sans-serif;
          background: linear-gradient(135deg, #74ebd5 0%, #acb6e5 100%);
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          margin: 0;
        }
        .container {
          text-align: center;
          background-color: white;
          padding: 60px;
          border-radius: 15px;
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .container:hover {
          transform: scale(1.05);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
        }
        h1 {
          color: #ff6347;
          font-size: 3em;
          background: linear-gradient(45deg, #ff6347, #ff416c);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          transition: color 0.3s ease;
        }
        h1:hover {
          color: #00c6ff;
          -webkit-text-fill-color: unset;
          cursor: pointer;
        }
        p {
          color: #333;
          font-size: 1.5em;
        }
        button {
          margin-top: 20px;
          padding: 15px 30px;
          font-size: 1.2em;
          font-weight: bold;
          background-color: #ff6347;
          color: white;
          border: none;
          border-radius: 50px;
          box-shadow: 0 5px 15px rgba(255, 99, 71, 0.4);
          transition: background-color 0.3s ease, box-shadow 0.3s ease;
          cursor: pointer;
        }
        button:hover {
          background-color: #ff416c;
          box-shadow: 0 10px 20px rgba(255, 65, 108, 0.5);
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>Hello Krishna Shukla</h1>
        <p>Welcome to your stylish and dashing Node.js server!</p>
        <button>Click Me</button>
      </div>
    </body>
    </html>
  `);
});

server.listen(port, hostname, () => {
  console.log(
    `%cServer running at http://${hostname}:${port}/`,
    "color: green; font-size: 16px;"
  );
});
