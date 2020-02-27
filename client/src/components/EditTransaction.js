import React, { useState, useContext, useEffect } from 'react'
import { GlobalContext } from '../context/GlobalState';

import {
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    TextField,
    DialogActions,
    IconButton
} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Create';

export const EditTransaction = ({ selectedData }) => {
    const [open, setOpen] = React.useState(false);
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);

    const { updateTransaction } = useContext(GlobalContext);

    useEffect(() => {
        setText(selectedData.text);
        setAmount(selectedData.amount);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const onSubmit = e => {
        e.preventDefault();
        const transaction = {
            _id: selectedData._id,
            text,
            amount: +amount
        }

        updateTransaction(transaction);
        handleToggle();
    }

    const handleToggle = () => {
        setOpen(!open);
    };

    return (
        <>
            <IconButton edge="end" aria-label="edit" onClick={handleToggle}><EditIcon /></IconButton>
            <Dialog open={open} onClose={handleToggle} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Edit transaction</DialogTitle>
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
                        <Button color="primary" type="submit">Update</Button>
                    </DialogActions>
                </form>
            </Dialog>
        </>
    )
}