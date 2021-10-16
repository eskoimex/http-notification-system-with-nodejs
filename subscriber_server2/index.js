const express = require('express');
const redis = require('redis');

const subscriber = redis.createClient();

const app = express();
const config = require('./config');

   subscriber.on("message",(channel,message) => {
        console.log("Received data :"+message+" for "+ channel);
    })
    
    subscriber.subscribe("topic1");
    

app.get('/test2', function (req, res){
    res.send("subscriber two notified");
 })


app.listen(config.port, () => console.log(`${config.name} is listening on url ${config.url} on port ` + config.port));
