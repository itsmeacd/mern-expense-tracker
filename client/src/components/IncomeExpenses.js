import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { numberWithCommas } from '../utils/format';

import {
    Card,
    CardContent,
    Grid,
    Typography
} from '@material-ui/core';

export const IncomeExpenses = () => {
    const { transactions } = useContext(GlobalContext);

    const amounts = transactions.map(transaction => transaction.amount);

    const income = amounts
        .filter(item => item > 0)
        .reduce((acc, item) => (acc += item), 0)
        .toFixed(2);

    const expense = (
        amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
        -1
    ).toFixed(2);

    return (
        <Card style={{ textAlign: 'center' }}>
            <CardContent>
                <Grid container>
                    <Grid item xs={6}>
                        <Typography variant="body1" gutterBottom>Income</Typography>
                        <Typography variant="body2" style={{ color: "green" }}>${numberWithCommas(income)}</Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant="body1" gutterBottom>Expense</Typography>
                        <Typography variant="body2" style={{ color: "red" }}>${numberWithCommas(expense)}</Typography>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}