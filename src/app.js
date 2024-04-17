const express = require('express');
const { port, mongoConnectionLink } = require('./config/config');
const { usersRouter } = require('./routes/users.router');
const { businessRouter } = require('./routes/business.router');
const { ordersRouter } = require('./routes/orders.router');
const mongoose = require('mongoose');

const app = express();
mongoose.connect(mongoConnectionLink).then(()=>{
    console.log('Connected to database')
})

/**middlewares */
app.use(express.json())
app.use(express.urlencoded({extended:true}))

/** ROUTES */
app.use('/api/users', usersRouter);
app.use('/api/business', businessRouter);
app.use('/api/orders', ordersRouter);


app.listen(port, ()=>console.log(`Server up and running on port ${port}`))