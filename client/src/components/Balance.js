import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { numberWithCommas } from '../utils/format';

import Typography from '@material-ui/core/Typography';

export const Balance = () => {
    const { transactions } = useContext(GlobalContext);

    const amounts = transactions.map(transaction => transaction.amount);

    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

    return (
        <>
            <Typography variant="body1" gutterBottom>Your Balance: ${numberWithCommas(total)}</Typography>
        </>
    )
}