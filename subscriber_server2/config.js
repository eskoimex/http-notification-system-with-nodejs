'use strict';

const dotenv = require('dotenv');

dotenv.config();

const {
    NAME,
    PORT,
    HOST,
    HOST_URL,
} = process.env;

module.exports = {
    name: NAME,
    port: PORT,
    host: HOST,
    url: HOST_URL
}