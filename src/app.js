const express = require('express');
const { port } = require('./config/config');

const app = express();



app.listen(port, ()=>console.log(`Server up and running on port ${port}`))