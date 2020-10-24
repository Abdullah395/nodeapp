const app = require('./server')
const port = process.env.HTTP_PORT || 2000

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
