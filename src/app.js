const express = require('express');
const { port } = require('./config/config');
const { usersRouter } = require('./routes/users.router');
const { businessRouter } = require('./routes/business.router');
const { ordersRouter } = require('./routes/orders.router');

const app = express();


/** ROUTES */
app.use('/api/users', usersRouter);
app.use('/api/business', businessRouter);
app.use('/api/orders', ordersRouter);


app.listen(port, ()=>console.log(`Server up and running on port ${port}`))