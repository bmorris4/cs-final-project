const express = require('express');
const port = 4506;
const app = express();

app.get('/api/game/content', (req, res) => {
  res.json({
    "title": "title",
    "background": "https://i.ytimg.com/vi/Ixzd8tYl5K4/maxresdefault.jpg",
    "message": "test"
  })
});

app.listen(port, () => {
  console.log(`server started on port: ${port}`);
});
