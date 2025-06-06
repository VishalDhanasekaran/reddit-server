const fetch = require('node-fetch');

module.exports = async (req, res) => {
  const { query } = req;
  const subreddit = query.subreddit;

  if (!subreddit) 
  {
    return res.status(400).json({ error: 'Subreddit parameter is missing' });
  }

  try {
    console.log("Request received for subreddit:", subreddit);
    const response = await fetch(`https://www.reddit.com/r/${subreddit}.json`);
    const data = await response.json();
    return res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching subreddit:", error.message);
    return res.status(500).json({ error: 'Failed to fetch subreddit' });
  }
};
