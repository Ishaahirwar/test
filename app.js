const express = require('express');
const app = express();
 


app.connect(require('./database/mongo'))



module.exports = app