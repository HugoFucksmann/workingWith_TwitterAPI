const express = require('express');
require("dotenv").config();
const cors = require('cors');

const app = express();

app.use( cors() );
app.use( express.json() );


//------------------------------------
app.use( '/timeline', require('./routes/timeline') );

app.use('/retweets', require('./routes/retweets'));

//------------------------------------
app.listen( process.env.PORT, () => console.log('Twitter API Online on port: ', process.env.PORT) );