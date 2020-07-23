import React, { useState, useEffect } from 'react';
import DateSelect from '../../components/DateSelect';
import TransactionInfo from '../../components/TransactionInfo';
import Transaction from '../../components/Transaction';
import NewTransaction from '../../components/NewTransaction';
import Filter from '../../components/Filter';

import { getMonth, getYear, format } from 'date-fns';
import api from '../../services/api';

import './styles.css';

function Home() {
  const [info, setInfo] = useState([]);
  const [transactions, setTransactions] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [selectedTransaction, setSelectedTransaction] = useState({});
  const [filter, setFilter] = useState();
  const [dateFilter, setDateFilter] = useState(format(new Date(), 'yyyy-MM'));

  async function handleDelete(id) {
    await api.delete(`/transactions/${id}`);
    load(filter);
  }

  useEffect(() => {
    if (!modalShow) {
      load(dateFilter, filter);
    }
  }, [dateFilter, filter, modalShow]);

  async function load(dateFilter, filter) {
    if (!dateFilter) {
      const year = getYear(new Date());
      const month = getMonth(new Date()) + 1;
      dateFilter = `${year}-0${month}`;
    }
    const response = await api.get('/transactions', {
      params: { period: dateFilter, description: filter },
    });
    let totalReceita = 0;
    let totalDespesa = 0;
    const transactions = response.data.transactions;

    transactions.forEach((transaction) => {
      if (transaction.type === '-') {
        totalDespesa += transaction.value;
      } else {
        totalReceita += transaction.value;
      }
    });
    setInfo({ size: transactions.length, totalDespesa, totalReceita });
    setTransactions(transactions);
  }
  return (
    <section className="hero is-info  is-fullheight">
      <div className="hero-head">
        <nav className="navbar">
          <div className="container">
            <div id="navbarMenuHeroA" className="navbar-menu">
              <div className="navbar-end">
                <a
                  href="https://github.com/felipesouza91/igti-final-react-fontend"
                  className="navbar-item"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <div className="container main-title">
        <h1 className="title">Sistema de Gerenciamento de financas</h1>
      </div>
      <div className="hero-body hero-body-start-flex">
        <div className="container">
          <div className="row">
            <DateSelect filter={setDateFilter} value={dateFilter} />
            <TransactionInfo infos={info} />
            <Filter showModal={setModalShow} filter={setFilter} />
          </div>
          <div className="column">
            {transactions.map((transaction) => (
              <Transaction
                key={transaction._id}
                value={transaction}
                edit={setSelectedTransaction}
                show={setModalShow}
                deleteItem={handleDelete}
              />
            ))}
          </div>
        </div>
      </div>
      {modalShow && (
        <NewTransaction show={setModalShow} transaction={selectedTransaction} />
      )}
    </section>
  );
}

export default Home;
