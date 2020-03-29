require('dotenv').config(); // to get environmental variables
//const path = require('path');

const config = {
    mode: process.env.NODE_ENV,
    server: {
        port: process.env.PORT
    },
    mongo: {
        connectionString: (process.env.NODE_ENV == 'production') ? process.env.MONGODB_CXN_STRING_PROD : process.env.MONGODB_CXN_STRING_DEV,
        user: (process.env.NODE_ENV == 'production') ? process.env.MONGODB_USER_PROD : process.env.MONGODB_USER_DEV,
        password: (process.env.NODE_ENV == 'production') ? process.env.MONGODB_PASS_PROD : process.env.MONGODB_PASS_DEV
    },
    markers: {
        uploadDirectory: 'public/uploads',
        maxFiles: 3
    },
    users: {
        jwtIssuer: process.env.JWT_ISSUER,
        jwtSecret: process.env.JWT_SECRET,
        jwtExpirationAge: process.env.JWT_EXPIRATION_AGE
    }
}

module.exports = config;
