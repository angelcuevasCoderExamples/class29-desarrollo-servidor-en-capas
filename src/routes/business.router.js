const {Router} = require('express');
const BusinessController = require('../controllers/business.controller');

const router = Router(); 

router.get('/', BusinessController.getAll);
router.get('/:id', BusinessController.getById);
router.post('/', BusinessController.create);
router.post('/:id/product', BusinessController.addProduct)

module.exports = {
    businessRouter: router
}; 