const express = require("express")
const cors = require('cors')

const app = express();

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