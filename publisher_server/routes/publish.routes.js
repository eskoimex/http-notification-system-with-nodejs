const express = require('express');
const { publish}  = require('../controllers/publish.controller');

const router = express.Router();


router.post('/publish/topic1', publish);

module.exports = {
    routes: router
}