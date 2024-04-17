const UsersDAO = require("../dao/classes/users.dao")

const usersService = new UsersDAO();

class UsersController {
    static async getAll(req, res){
        try {
            const result = await usersService.getAll();
            res.send({status:'success', payload:result})
        } catch (error) {
            res.status(500).send({status:'error', error: error.message})
        }
    }
    static async getById(req, res){
        try {
            const {id} = req.params; 
            const result = await usersService.getById(id);
            res.send({status:'success', payload:result})
        } catch (error) {
            res.status(500).send({status:'error', error: error.message})
        }
    }
    static async create(req, res){
        try {
            const userData = req.body; 
            const result = await usersService.create(userData);
            res.send({status:'success', payload:result})
        } catch (error) {
            res.status(500).send({status:'error', error: error.message})
        }
    }
    
}

module.exports = UsersController; 