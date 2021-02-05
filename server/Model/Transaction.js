import mongoose from 'mongoose';


const transactionSchema =  new mongoose.Schema({
    text:{
        type:String,
        required:[true,'Please add some text'],
        trim:true
    },
    amount:{
        type:Number,
        required:[true,'Please enter negative or positive amount']
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
});


export default mongoose.model('Transaction',transactionSchema);