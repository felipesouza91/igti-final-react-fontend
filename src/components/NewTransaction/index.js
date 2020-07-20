import React, { useState } from 'react';
import '../../../node_modules/bulma-checkradio/dist/css/bulma-checkradio.min.css';
import { getMonth, getDate, getYear, parseISO } from 'date-fns';

function NewTransaction({ show }) {
  const [type, setType] = useState('');
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');
  const [category, setCategory] = useState('');
  const [date, setDate] = useState(new Date());

  function handleSubmit() {
    const object = {
      type,
      description,
      value,
      category,
      day: getDate(parseISO(date)),
      mounth: getMonth(parseISO(date)) + 1,
      year: getYear(parseISO(date)),
    };

    console.log(object);
  }

  function handleDisable() {
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
                placeholder="Text input"
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
                placeholder="Text input"
                onChange={(event) => setCategory(event.target.value)}
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
                    placeholder="Text input"
                    onChange={(event) => setValue(event.target.value)}
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Data</label>
                <div className="control">
                  <input
                    className="input"
                    type="date"
                    placeholder="Text input"
                    onChange={(event) => setDate(event.target.value)}
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
