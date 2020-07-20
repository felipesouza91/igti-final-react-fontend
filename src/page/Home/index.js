import React, { useState } from 'react';
import DateSelect from '../../components/DateSelect';
import TransactionInfo from '../../components/TransactionInfo';
import Transaction from '../../components/Transaction';
import NewTransaction from '../../components/NewTransaction';
import Filter from '../../components/Filter';
import './styles.css';

function Home() {
  const [modalShow, setModalShow] = useState(false);
  const [filter, setFilter] = useState('');
  return (
    <section className="hero is-info  is-fullheight">
      <div className="hero-head">
        <nav className="navbar">
          <div className="container">
            <a className="navbar-item">Home</a>
          </div>
        </nav>
      </div>
      <div className="container main-title">
        <h1 className="title">Sistema de Gerenciamento de financas</h1>
      </div>
      <div className="hero-body hero-body-start-flex">
        <div className="container">
          <div className="row">
            <DateSelect />
            <TransactionInfo />
            <Filter showModal={setModalShow} filter={setFilter} />
          </div>
          <div className="column">
            <Transaction isDebid={false} />
            <Transaction isDebid />
          </div>
        </div>
      </div>
      {modalShow && <NewTransaction show={setModalShow} />}
    </section>
  );
}

export default Home;
