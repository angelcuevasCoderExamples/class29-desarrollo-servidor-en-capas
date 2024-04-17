const businessModel = require("../models/business.model");

class BusinessDAO {
    async getAll(){
        return await businessModel.find({})
    }
    async getById(id){
        const business = await businessModel.findById(id) //or businessModel.findOne({_id:id});
        if(!business) throw {message:'business does not exist', status:400}  // or Error('')
        return business; 
    }
    async create(user){
        return await businessModel.create(user);
    }
    async udpate(id, user){
        await this.getById(id);
        return await businessModel.updateOne({_id:id},user);
    }
}

module.exports = BusinessDAO; 