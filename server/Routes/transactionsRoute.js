import express from 'express';
import allTransaction from '../controllers/transactionController.js';

const router = express.Router();
router.get('/',allTransaction.getTransactions);
router.post('/',allTransaction.addTransactions);
router.delete('/:id',allTransaction.deleteTransaction);

export default router;