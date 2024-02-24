import { config } from 'dotenv';

config();

const redisUrl = process.env.REDIS_URL || process.env.REDIS_URL || 'redis://localhost:6379';
const redisPort = Number(process.env.REDIS_PORT || 6379);

const redisUsername = process.env.REDIS_USERNAME || 'default';
const redisPassword = process.env.REDIS_PASSWORD || 'password';

const bugsnagApiKey = process.env.BUGSNAG_API_KEY || null;
const mongodbUri = process.env.MONGODB_URI || 'mongodb://localhost/5e-database';

const awsConfigEnv = process.env.AWS_CONFIG_ENV || 'prod';
const awsRegion = process.env.AWS_REGION || 'us-west-1';
const awsAccessKeyId = process.env.AWS_ACCESS_KEY_ID || '';
const awsSecretAccessKey = process.env.AWS_SECRET_ACCESS_KEY || '';

console.log('Environment Variables:');
console.table({
  redisUrl,
  redisPort,
  redisUsername,
  redisPassword,
  bugsnagApiKey,
  mongodbUri,
  awsConfigEnv,
  awsRegion,
  awsAccessKeyId,
  awsSecretAccessKey,
});

export {
  redisUrl,
  redisPort,
  redisUsername,
  redisPassword,
  bugsnagApiKey,
  mongodbUri,
  awsConfigEnv,
  awsRegion,
  awsAccessKeyId,
  awsSecretAccessKey,
};
