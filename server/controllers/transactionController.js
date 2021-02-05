import Transactions from '../Model/Transaction.js';


class allTransaction{
    // @desc Get all transactions
    // @route GET /api/v1/transactions
    // @access public
    static async getTransactions(req,res){
        try {
            const transactions = await Transactions.find();
            res.status(200).json({
                message:'Transactions found',
                count:transactions.length,
                data:transactions
            })
        } catch (error) {
            res.status(500).json({
                message:'Transaction not found',
                error:error
            })
            
        }
    }
    // @desc Add all transactions
    // @route POST /api/v1/transactions
    // @access public
    static async addTransactions(req,res){
        const {text,amount} = req.body;
        try {
            const transaction = await Transactions.create({text,amount});

            res.status(201).json({
                message: 'Transaction created successfully',
                data:transaction
            })
            
        } catch (error) {
            if(error.name  === 'ValidationError'){
                const messages = Object.values(error.errors).map(val => val.message);
                return res.status(404).json({
                    errors : messages
                })
            }
        }
    }
    // @desc Add all transactions
    // @route POST /api/v1/transaction/:id
    // @access public
    static async deleteTransaction(req,res){
        try {
            const transaction = await Transactions.findById(req.params.id);
            if(!transaction){
                res.status(404).json({
                    message:'No transaction found'
                })
            }
            transaction.remove();
            return res.status(200).json({
                message:'Transaction removed',
                transaction:transaction
            })
        } catch (error) {
            res.status(404).json({
                message:'Transaction with that id is not found'
            })
        }
    }
}

export default allTransaction;