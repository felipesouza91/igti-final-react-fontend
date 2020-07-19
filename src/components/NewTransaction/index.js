import React from 'react';
import '../../../node_modules/bulma-checkradio/dist/css/bulma-checkradio.min.css';
// import { Container } from './styles';

function NewTransaction({ show }) {
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
              />
              <label className="label" htmlFor="despesa">
                Despesa
              </label>
              <input
                className="is-checkradio"
                id="receita"
                type="radio"
                name="tipo"
              />
              <label className="label" htmlFor="receita">
                Receita
              </label>
            </div>
          </div>
          <div className="field">
            <label className="label">Descrição</label>
            <div className="control">
              <input className="input" type="text" placeholder="Text input" />
            </div>
          </div>
          <div className="field">
            <label className="label">Categoria</label>
            <div className="control">
              <input className="input" type="text" placeholder="Text input" />
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
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer className="modal-card-foot">
          <button className="button is-success">Salvar</button>
          <button onClick={handleDisable} className="button is-danger">
            Fechar
          </button>
        </footer>
      </div>
    </div>
  );
}

export default NewTransaction;
