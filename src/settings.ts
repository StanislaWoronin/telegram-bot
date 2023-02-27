export const settings = {
    environment: process.env.NODE_ENV || 'dev',
    MONGO_URI:
        process.env.mongoURI,
    POSTGRES_URI: process.env.postgresURI,
    local: 'postgresql://telegramBot:admin@localhost:5432',
    JWT_SECRET: process.env.JWT_SECRET || '123',
    basic: {
        USER: 'admin',
        PASS: 'qwerty',
    },
    SALT_GENERATE_ROUND: '10',
    timeLife: {
        CONFIRMATION_CODE: '24', // hour
        ACCESS_TOKEN: '10000', // sec
        REFRESH_TOKEN: '20000', // sec
    },
    throttler: {
        CONNECTION_TIME_LIMIT: '10000', // msec
        CONNECTION_COUNT_LIMIT: '5',
    },

}