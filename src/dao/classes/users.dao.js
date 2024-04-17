const usersModel = require("../models/users.model");

class UsersDAO {
    async getAll(){
        return await usersModel.find({})
    }
    async getById(id){
        const user = await usersModel.findById(id) //or usersModel.findOne({_id:id});
        if(!user) throw {message:'user does not exist', status:400}  // or Error('')
        return user; 
    }
    async create(user){
        return await usersModel.create(user);
    }
    async udpate(id, user){
        await this.getById(id);
        return await usersModel.updateOne({_id:id},user);
    }
}

module.exports = UsersDAO; 