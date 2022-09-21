var redis = require("redis");

var client = redis.createClient({
  host: process.env.REDIS_HOST || "127.0.0.1",
  port: process.env.REDIS_PORT || 6379
})

process.on('SIGINT', function() {
  client.quit();
});

module.exports = client
