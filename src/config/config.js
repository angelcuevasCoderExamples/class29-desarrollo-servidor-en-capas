const dotenv = require('dotenv');

dotenv.config();

module.exports = {
    port: process.env.PORT,
    mongoConnectionLink: process.env.MONGO_CONNECTION_LINK 
}