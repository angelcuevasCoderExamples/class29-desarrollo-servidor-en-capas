class BaseDAO {

    constructor(model){
        this.model = model; 
    }

    async getAll(){
        return await this.model.find({})
    }
    async getById(id){
        return await this.model.findById(id) //or this.model.findOne({_id:id})
    }
    async create(user){
        return await this.model.create(user);
    }
    async udpate(id, user){
        return await this.model.updateOne({_id:id},user);
    }
}


/**
 * ejemplo de subclase 
 * class UsersDAO extends =  
 */

// class UsersDAO extends BaseDAO {
//     constructor(){
//         super(usersModel)
//     }
// }

// class BusinessDAO extends BaseDAO {
//     constructor(){
//         super(businessModel)
//     }
// }


module.exports = BaseDAO; 