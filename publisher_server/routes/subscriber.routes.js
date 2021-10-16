const express = require('express');
const router = express.Router();

const { subscribe}  = require('../controllers/subscribe.controller');

router.post('/subscribe/topic1', subscribe);

module.exports = {
    routes: router
}