import React, { useState } from 'react';
import '../../../node_modules/bulma-checkradio/dist/css/bulma-checkradio.min.css';
import { format, parse } from 'date-fns';
import api from '../../services/api';

function NewTransaction({ show, transaction }) {
  const [type, setType] = useState(transaction.type);
  const [description, setDescription] = useState(transaction.description);
  const [value, setValue] = useState(transaction.value);
  const [category, setCategory] = useState(transaction.category);
  const [date, setDate] = useState(transaction.yearMonthDay);

  async function handleSubmit() {
    const formatedDate = parse(date, 'yyyy-MM-dd', new Date());
    const object = {
      type,
      description,
      value,
      category,
      day: format(formatedDate, 'dd'),
      month: format(formatedDate, 'MM'),
      year: format(formatedDate, 'yyyy'),
    };
    try {
      if (!transaction._id) {
        await api.post(`/transactions`, object);
      } else {
        await api.put(`/transactions/${transaction._id}`, object);
      }
      show(false);
    } catch (error) {
      console.log('Error');
    }
  }

  function handleDisable() {
    transaction = {};
    show(false);
  }

  return (
    <div className={`modal is-active`}>
      <div className="modal-background"></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">Novo Lançamento</p>
          <button
            onClick={handleDisable}
            className="delete"
            aria-label="close"
          ></button>
        </header>
        <section className="modal-card-body">
          <div className="field">
            <label className="label">Tipo</label>
            <div className="control">
              <input
                className="is-checkradio"
                id="despesa"
                type="radio"
                name="tipo"
                value="-"
                defaultChecked={transaction.type === '-'}
                onClick={(event) => setType(event.target.value)}
              />
              <label className="label" htmlFor="despesa">
                Despesa
              </label>
              <input
                className="is-checkradio"
                id="receita"
                type="radio"
                name="tipo"
                value="+"
                defaultChecked={transaction.type === '+'}
                onClick={(event) => setType(event.target.value)}
              />
              <label className="label" htmlFor="receita">
                Receita
              </label>
            </div>
          </div>
          <div className="field">
            <label className="label">Descrição</label>
            <div className="control">
              <input
                className="input"
                type="text"
                placeholder="Descrição"
                defaultValue={transaction.description}
                onChange={(event) => setDescription(event.target.value)}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Categoria</label>
            <div className="control">
              <input
                className="input"
                type="text"
                placeholder="Categoria"
                onChange={(event) => setCategory(event.target.value)}
                defaultValue={transaction.category}
              />
            </div>
          </div>
          <div className="field">
            <div className="field-body">
              <div className="field">
                <label className="label">Valor</label>
                <div className="control">
                  <input
                    className="input"
                    type="number"
                    placeholder="Valor"
                    onChange={(event) => setValue(event.target.value)}
                    defaultValue={transaction.value}
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Data</label>
                <div className="control">
                  <input
                    className="input"
                    type="date"
                    onChange={(event) => setDate(event.target.value)}
                    value={transaction.yearMonthDay}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer className="modal-card-foot">
          <button className="button is-success" onClick={handleSubmit}>
            Salvar
          </button>
          <button onClick={handleDisable} className="button is-danger">
            Fechar
          </button>
        </footer>
      </div>
    </div>
  );
}

export default NewTransaction;
