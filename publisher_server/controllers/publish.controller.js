'use strict';
const { handleResError } = require("../utils/err.util");
const { handleResSuccess } = require("../utils/success.util");

const { publishTopic } = require("../functions/publish.function");
const {validatePublishString} = require('../validators/publish.validator');


const publish = async (req, res, next) => {
  try{
    let {err, value} = await validatePublishString(req.body)
    if(err) handleResError(res, err, res.statusCode);
      await publishTopic(req,res);
  }catch(e){
   await handleResError(res, e, res.statusCode)
  }

};



module.exports = { publish}