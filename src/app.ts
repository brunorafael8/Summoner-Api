import express from 'express'
const app = express()

app.get('/', function (req, res): void {
  res.send("Welcome to Summoner's Rift")
})

app.listen(3000, function (): void {
  console.log('app listening on port 3000!')
})
