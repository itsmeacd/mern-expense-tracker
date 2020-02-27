import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { numberWithCommas } from '../utils/format';
import { EditTransaction } from '../components/EditTransaction';

import {
    ListItem,
    ListItemText,
    ListItemSecondaryAction,
    IconButton,
    Paper
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

export const Transaction = ({ transaction }) => {
    const { deleteTransaction } = useContext(GlobalContext);

    const sign = transaction.amount < 0 ? '-' : '+';

    return (
        <ListItem component={Paper} style={{ marginBottom: 16, borderLeft: transaction.amount > 0 ? "4px solid green" : "4px solid red" }}>
            <ListItemText primary={transaction.text} secondary={sign + "$" + numberWithCommas(Math.abs(transaction.amount))} />
            <ListItemSecondaryAction>
                <EditTransaction selectedData={transaction} />
                <IconButton edge="end" aria-label="delete" onClick={() => deleteTransaction(transaction._id)}><DeleteIcon /></IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    )
}