import React from 'react';
import './App.css';

import { GlobalProvider } from './context/GlobalState';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { IncomeExpenses } from './components/IncomeExpenses';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';

import {
  Container,
  CssBaseline
} from '@material-ui/core';

function App() {
  return (
    <GlobalProvider>
      <div className="App">
        <CssBaseline />
        <Container maxWidth="sm">
          <Header />
          <Balance />
          <IncomeExpenses />
          <TransactionList />
          <AddTransaction />
        </Container>
      </div>
    </GlobalProvider>
  );
}

export default App;
