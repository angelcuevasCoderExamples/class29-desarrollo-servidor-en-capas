const UsersDAO = require('../dao/classes/users.dao')
const BusinessDAO = require('../dao/classes/business.dao')
const OrdersDAO = require('../dao/classes/orders.dao')

const usersService = new UsersDAO(); 
const businessService = new BusinessDAO();
const ordersService = new OrdersDAO();

class OrdersController {
    static async getAll(req, res){
        try {
            let result = await ordersService.getAll();
            res.send({status:'success', payload: result})
        } catch (error) {
            res.status(500).send({status:'error', error: error.message})
        }
    }
    static async getById(req, res){
        try {
            const {id} = req.params; 
            let result = await ordersService.getById(id);
            res.send({status:'success', payload: result})
        } catch (error) {
            res.status(500).send({status:'error', error: error.message})
        }
    }
    static async create(req, res){
        try {
            const {user, business, products} = req.body; 
            const userId = user; 
            const businessId = business; 

            //find documents 
            const foundUser = await usersService.getById(userId);
            const foundBusiness = await businessService.getById(businessId);

            //mapping request products to business products  
            let orderProducts = products.map(productId=>foundBusiness.products.find(bp=>bp.id == productId))

            //calculating total price
            const totalPrice = orderProducts.reduce((acc,product)=>{
                return acc+product.price;
            }, 0)

            //creating ORDER 
            let orderNumber = `${Date.now()}${Math.floor(Math.random()*1000+1)}`
            const orderData = {
                number: orderNumber,
                user: userId,
                business: businessId, 
                status: 'pending',
                products: orderProducts,
                totalPrice
            }

            // saving order 
            const orderResult = await ordersService.create(orderData);

            //updating user data
            foundUser.orders.push(orderResult._id); 
            await usersService.udpate(userId, foundUser);

            res.send({status:'success', payload: orderResult})
        } catch (error) {
            res.status(500).send({status:'error', error: error.message})
        }
    }
    static async setStatus(req, res){
        try {
            const {id} = req.params; 
            const {status} = req.query;
            await ordersService.getById(id); 
            const result = await ordersService.udpate(id, {$set:{status:status}})
            res.send({status:'success', payload: result})
        } catch (error) {
            res.status(500).send({status:'error', error: error.message})
        }    
    }
}

module.exports = OrdersController; 