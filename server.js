const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');

const app = express();
app.use((cors()));

app.get('/reddit/:subreddit', async (req, res)=>{

    const subreddit = req.params.subreddit;
    
    try
    {
        const response = await fetch(`https://www.reddit.com/r/${subreddit}.json`);
        const data = await response.json();
        res.json(data);
    }
    catch(error)
    {
        res.status(500).json({error:"fail to fetch subreddit"});
    }
});

app.listen(5000, ()=>{
    console.log('Proxy server is running on port 5000...')
})
