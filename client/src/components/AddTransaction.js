import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';

import {
    Fab,
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    TextField,
    DialogActions
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

export const AddTransaction = () => {
    const [open, setOpen] = React.useState(false);
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);

    const { addTransaction } = useContext(GlobalContext);

    const onSubmit = e => {
        e.preventDefault();
        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            text,
            amount: +amount
        }

        addTransaction(newTransaction);
        handleToggle();
    }

    const handleToggle = () => {
        setOpen(!open);
        setText('');
        setAmount(0);
    };

    return (
        <>
            <br />
            <Fab color="primary" aria-label="add" onClick={handleToggle} style={{ float: 'right' }}>
                <AddIcon />
            </Fab>
            <Dialog open={open} onClose={handleToggle} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Add new transaction</DialogTitle>
                <form onSubmit={onSubmit}>
                    <DialogContent>
                        <TextField
                            autoFocus
                            label="Text"
                            type="text"
                            fullWidth
                            placeholder="Enter text..."
                            margin="normal"
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                        />
                        <TextField
                            label="Amount (negative - expense, positive - income)"
                            type="number"
                            fullWidth
                            placeholder="Enter amount..."
                            margin="normal"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleToggle} color="default">Cancel</Button>
                        <Button color="primary" type="submit">Add</Button>
                    </DialogActions>
                </form>
            </Dialog>
        </>
    )
}