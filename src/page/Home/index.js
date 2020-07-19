import React, { useState } from 'react';
import DateSelect from '../../components/DateSelect';
import TransactionInfo from '../../components/TransactionInfo';
import Transaction from '../../components/Transaction';
import NewTransaction from '../../components/NewTransaction';

import './styles.css';

function Home() {
  const [modalShow, setModalShow] = useState(false);
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
            <div className="column">
              <div className="field is-grouped">
                <div className="control">
                  <button
                    onClick={() => setModalShow(!modalShow)}
                    className="button is-success"
                  >
                    Novo Lançamento
                  </button>
                </div>
                <div className="control is-expanded">
                  <div className="field is-horizontal">
                    <div className="field-label is-normal">
                      <label className="label">Filtro</label>
                    </div>
                    <div className="field-body">
                      <div className="field">
                        <div className="control is-expanded has-icons-left">
                          <input
                            className="input"
                            type="text"
                            placeholder="Filtro"
                          />
                          <span className="icon is-small is-left">
                            <i className="fas fa-user"></i>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
