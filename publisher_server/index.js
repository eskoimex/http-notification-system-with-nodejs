//'use strict';
const express = require('express');

const app = express();

const config = require('./config');


const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 }))


app.use(bodyParser.json({limit: '25mb'}));

//ROUTES
const publishRoute = require('./routes/publish.routes');
const subscriberRoute = require('./routes/subscriber.routes');


// BACK ENDPOINTS
app.use('/', publishRoute.routes);
app.use('/', subscriberRoute.routes);



app.listen(config.port, () => console.log(`${config.name} is listening on url ${config.url} on port ` + config.port));
