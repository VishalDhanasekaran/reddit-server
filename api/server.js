const express = require("express")
const cors = require('cors')

const app = express();

app.use(
  cors({
    origin: ["https://reddit-client-seven.vercel.app/", "http://localhost:3000", "http://localhost:3001"],
    methods: ["GET", "POST", "DELETE", "PUT"],
    credentials: true,
  })
);

app.get('/reddit/:subreddit', async (req, res)=>{

  const subreddit = req.params.subreddit;

  try{
    const response = await fetch(`https://www.reddit.com/r/${subreddit}.json`);

    const data = response.json();
    res.json(data);

  }
  catch{
    res.status(500).json({error: "failed to fetch subreddit!"})
  }
})