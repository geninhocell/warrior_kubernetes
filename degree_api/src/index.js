const express = require('express');

const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', async(req, res)=>{
  return res.json({
    ok: true,
    NODE_ENV: process.env.NODE_ENV,
    API_URL: process.env.API_URL,
    API_VERSION: process.env.API_VERSION,
    PEM_PUBLIC: process.env.PEM_PUBLIC
  })
})

const port = 3332;

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server started on port ${port}`);
});
