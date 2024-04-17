const BusinessDAO = require("../dao/classes/business.dao")

const businesService = new BusinessDAO();

class BusinessController {
    static async getAll(req, res){
        try {
            let result = await businesService.getAll();
            res.send({status:'success', payload: result})
        } catch (error) {
            res.status(500).send({status:'error', error: error.message})
        }
    }
    static async getById(req, res){
        try {
            const {id} = req.params; 
            let result = await businesService.getById(id);
            res.send({status:'success', payload: result})
        } catch (error) {
            res.status(500).send({status:'error', error: error.message})
        }
    }
    static async create(req, res){
        try {
            const businessData = req.body; 
            const result = await businesService.create(businessData);
            res.send({status:'success', payload: result})
        } catch (error) {
            res.status(500).send({status:'error', error: error.message})
        }
    }
    static async addProduct(req, res){
        try {
            const {id} = req.params; 
            const product = req.body;

            const business = await businesService.getById(id);
            business.products.push(product)
            await businesService.udpate(id, business);

            res.send({status:'success', payload: business})
        } catch (error) {
            res.status(500).send({status:'error', error: error.message})
        }
    }
}

module.exports = BusinessController;