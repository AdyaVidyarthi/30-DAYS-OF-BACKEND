require('dotenv').config()

const express = require('express');
const app = express();//app has all functionalities of express
const port = 5000;//virtual port to listen request
app.get('/', (req, res) => {
  res.send('Hello World!');//app listen to the home route/ if there is any request give a callback with contains a req and a res.res.send hello world
});

app.get('/twitter', (req, res) => {
  res.send('AdyaVidyarthi');//app listen to the home route/ if there is any request give a callback with contains a req and a res.res.send hello world
});

app.get('/login', (req, res) => {
  res.send('<h1>please login at chai aur code</h1>');//hot reloading:
});



app.get('/password', (req, res) => {
  res.send('<h1>please enter password at chai aur code</h1>');//hot reloading:first stop the server CTRL+C, then run again
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);//app listens from port 3000
});

//output: "app listening on port 3000": means app is continuously listening for requests on port 3000. App hasnot been closed that is why no console statement.
//This is a server listenign on / and /twitter