class OrdersController {
    static async getAll(req, res){
        try {
            res.send({status:'success', payload: 'getAll'})
        } catch (error) {
            res.status(500).send({status:'error', error: error.message})
        }
    }
    static async getById(req, res){
        try {
            res.send({status:'success', payload: 'getById'})
        } catch (error) {
            res.status(500).send({status:'error', error: error.message})
        }
    }
    static async create(req, res){
        try {
            res.send({status:'success', payload: 'create'})
        } catch (error) {
            res.status(500).send({status:'error', error: error.message})
        }
    }
    static async setStatus(req, res){
        try {
            res.send({status:'success', payload: 'setStatus'})
        } catch (error) {
            res.status(500).send({status:'error', error: error.message})
        }    
    }
}

module.exports = OrdersController; 