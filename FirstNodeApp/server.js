const { createServer } = require('http')

const server = createServer((req, res) => {
  res.end('Hello, world!');
})

const PORT = process.env.PORT || 3000

server.listen(PORT, () => {
  console.log(`Server listening at: ${PORT}.`)
})