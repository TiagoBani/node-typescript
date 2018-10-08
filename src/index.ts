import app from './App'

const port = process.env.PORT || 3000

app.listen(port, (err) => {
  if (err) {
    console.log('Error: ')
    return console.log(err)
  }

  return console.log(`server is listening on ${port}`)
})
