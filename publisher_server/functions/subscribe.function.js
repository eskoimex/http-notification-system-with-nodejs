'use strict';

const { handleResSuccess } = require("../utils/success.util");
const { handleResError } = require("../utils/err.util");
const redis = require('redis');

const subscriber = redis.createClient();

const subscribeUrl = async (req, res, next) => {
 let err; 
  try { 

    const url = req.body;
    const topic = req.path.substr(11)

    const data = {
      ...url,
      topic: topic
    }
  handleResSuccess(res,'', data, res.statusCode)


    // subscriber.on("message",(channel,message) => {
    //     console.log("Received data :"+message);
    //    // handleResSuccess(res, `${topic} successfully published`, post_request, res.statusCode)
    //       const data = {
    //         ...url,
    //         topic: topic
    //       }
    //     handleResSuccess(res,'', data, res.statusCode)

    //   })

    //   subscriber.subscribe("topic1");

    

    
    }catch(e){
      console,log(e)
      handleResError(res, e, res.statusCode)
  }
}



module.exports = {subscribeUrl}