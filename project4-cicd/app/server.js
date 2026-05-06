const express = require('express');
const redis = require('redis');
const app = express();

const redisClient = redis.createClient({
  url: process.env.REDIS_URL || 'redis://redis:6379'
});
redisClient.on('error', err => console.error('Redis error:', err));
redisClient.connect();

app.get('/', async (req, res) => {
  let visits = await redisClient.get('visits');
  visits = visits ? parseInt(visits) + 1 : 1;
  await redisClient.set('visits', visits);
  res.send(`<h1>Visits: ${visits}</h1>`);
});

app.get('/health', (req, res) => res.status(200).json({ status: 'ok' }));

app.listen(3000, () => console.log('App listening on port 3000'));