import React from 'react';
import DateSelect from '../../components/DateSelect';
import TransactionInfo from '../../components/TransactionInfo';
import './styles.css';

function Home() {
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
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
