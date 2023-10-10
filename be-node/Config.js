require('dotenv').config();

module.exports = {
    PER_PAGE: 10,
    BCRYPT_ROUND: 10,
    FRONT_URL: process.env.FRONT_URL || 'http://localhost:3000',
    
    PORT: process.env.PORT || 5000,
    TOKEN_SECRET: process.env.TOKEN_SECRET || 'some text',
    DB_URL: process.env.DB_URL,
    DB_USER: process.env.DB_USER || 'root',
    DB_PASSWORD: process.env.DB_PASSWORD || 'root',

    MAIL_DRIVER: process.env.MAIL_DRIVER,
    SMTP_HOST: process.env.SMTP_HOST,
    SMTP_PORT: process.env.SMTP_PORT,

    SMTP_USERNAME: process.env.SMTP_USERNAME,
    SMTP_PASSWORD: process.env.SMTP_PASSWORD,

    MAIL_FROM_NAME: process.env.MAIL_FROM_NAME,
    MAIL_FROM_ADDRESS: process.env.MAIL_FROM_ADDRESS,

}