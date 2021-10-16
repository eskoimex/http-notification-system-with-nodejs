'use strict';

const { handleResSuccess } = require("../utils/success.util");
const { handleResError } = require("../utils/err.util");
const redis = require('redis');

const publisher = redis.createClient();


const publishTopic = async (req, res, next) => {
  try { 
        const msg = req.body;
        const topic = "topic1"

        const post_request = {
          topic: topic,
          data: msg
      }
         
      publisher.publish(topic,JSON.stringify(post_request))
      handleResSuccess(res, `${topic} successfully published`, post_request, res.statusCode)
      console.log( `${topic} successfully published`)

    }catch(e){
        let err = {
          message: "Failed to publish topic - "+ e,
        };
        handleResError(res, err, res.statusCode)
        console.log("Failed to publish topic", e)
  }
}


module.exports = {publishTopic}