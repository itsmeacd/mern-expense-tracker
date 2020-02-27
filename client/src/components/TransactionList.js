import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Transaction } from './Transaction';

import {
    Typography,
    List
} from '@material-ui/core';

export const TransactionList = () => {
    const { transactions, getTransactions, loading } = useContext(GlobalContext);

    useEffect(() => {
        getTransactions();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <br />
            <Typography variant="body2" gutterBottom>History</Typography>
            <List style={{ height: 300, overflow: "auto" }}>
                {!loading ? (
                    transactions.map(transaction => (<Transaction key={transaction._id} transaction={transaction} />))
                ) : <Typography variant="body2" align="center" gutterBottom>Loading ...</Typography>}
            </List>
        </>
    )
}