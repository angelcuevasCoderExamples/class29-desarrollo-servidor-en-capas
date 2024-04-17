const {Router} = require('express');
const OrdersController = require('../controllers/orders.controller');

const router = Router(); 

router.get('/', OrdersController.getAll);
router.get('/:id', OrdersController.getById);
router.post('/', OrdersController.create);
router.put('/:id', OrdersController.setStatus);


module.exports = {
    ordersRouter: router
}; 