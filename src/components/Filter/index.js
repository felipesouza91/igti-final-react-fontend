import React from 'react';

// import { Container } from './styles';

function Filter({ showModal, filter }) {
  function onChangeText(event) {
    filter(event.target.value);
  }

  function show() {
    showModal(true);
  }
  return (
    <div className="column">
      <div className="field is-grouped">
        <div className="control">
          <button onClick={show} className="button is-success">
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
                    onChange={(event) => onChangeText(event)}
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
  );
}

export default Filter;
