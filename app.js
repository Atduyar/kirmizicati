import express from "express"
import dotenv  from "dotenv";

dotenv.config({ path: './.env' });

const app = express()
const port = process.env.PORT || 5000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`http://localhost:${port}`)
  console.log(`Example app listening on port ${port}`)
})