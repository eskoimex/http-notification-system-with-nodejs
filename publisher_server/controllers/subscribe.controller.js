'use strict';
const { handleResError } = require("../utils/err.util");
const { handleResSuccess } = require("../utils/success.util");

const { subscribeUrl } = require("../functions/subscribe.function");
const {validateSubscribeUrl} = require('../validators/subscribe.validator');


const subscribe = async (req, res, next) => {
  try{
    let {err, value} = await validateSubscribeUrl(req.body)
    if(err) handleResError(res, err, res.statusCode);
      await subscribeUrl(req,res);
  }catch(e){
   await handleResError(res, e, res.statusCode)
  }

};



module.exports = { subscribe}