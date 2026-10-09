require('dotenv').config()

const express = require('express');
const app = express();//app has all functionalities of express
const port = 5000;//virtual port to listen request

const githubdata={
  "login": "AdyaVidyarthi",
  "id": 272831376,
  "node_id": "U_kgDOEEMTkA",
  "avatar_url": "https://avatars.githubusercontent.com/u/272831376?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/AdyaVidyarthi",
  "html_url": "https://github.com/AdyaVidyarthi",
  "followers_url": "https://api.github.com/users/AdyaVidyarthi/followers",
  "following_url": "https://api.github.com/users/AdyaVidyarthi/following{/other_user}",
  "gists_url": "https://api.github.com/users/AdyaVidyarthi/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/AdyaVidyarthi/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/AdyaVidyarthi/subscriptions",
  "organizations_url": "https://api.github.com/users/AdyaVidyarthi/orgs",
  "repos_url": "https://api.github.com/users/AdyaVidyarthi/repos",
  "events_url": "https://api.github.com/users/AdyaVidyarthi/events{/privacy}",
  "received_events_url": "https://api.github.com/users/AdyaVidyarthi/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Adya Vidyarthi",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 6,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2026-04-01T13:26:12Z",
  "updated_at": "2026-10-09T04:08:11Z"
}

app.get('/github',(req,res)=> {
  res.json(githubdata);
})


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


app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);//app listens from port 3000
});

//output: "app listening on port 3000": means app is continuously listening for requests on port 3000. App hasnot been closed that is why no console statement.
//This is a server listenign on / and /twitter