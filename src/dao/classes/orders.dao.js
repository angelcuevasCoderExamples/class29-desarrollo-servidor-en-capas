const ordersModel = require("../models/orders.model");


class OrdersDAO {
    async getAll(){
        return await ordersModel.find({})
    }
    async getById(id){
        const order = await ordersModel.findById(id) //or ordersModel.findOne({_id:id});
        if(!order) throw {message:'order does not exist', status:400}  // or Error('')
        return order; 
    }
    async create(user){
        return await ordersModel.create(user);
    }
    async udpate(id, user){
        await this.getById(id);
        return await ordersModel.updateOne({_id:id},user);
    }
}

module.exports = OrdersDAO; 