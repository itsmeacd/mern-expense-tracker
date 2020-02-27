const express = require('express');
const router = express.Router();
const { getTransactions, addTransaction, deleteTransaction, getTransactionById, updateTransaction } = require('../controllers/transactions');

router
    .route('/')
    .get(getTransactions)
    .post(addTransaction);

router
    .route('/:id')
    .get(getTransactionById)
    .delete(deleteTransaction)
    .put(updateTransaction);

module.exports = router;