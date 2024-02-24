import { createClient } from 'redis';
import { redisUrl, redisPort, redisPassword, redisUsername } from './environmentVariables.js';

export default createClient({
  password: redisPassword,
  username: redisUsername,
  socket: {
    host: redisUrl,
    port: redisPort,
  },
});
