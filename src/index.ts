import express from 'express';

const app = express();

const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
  console.log('Received GET request... ');
  res.send(`<h2>Server is on...</h2>`);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}...`);
});