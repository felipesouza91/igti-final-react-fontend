import React, { useState } from 'react';

function Filter({ showModal, filter }) {
  const [description, setDescription] = useState('');
  function onSearch(event) {
    console.log(event);
    if (event === null || event.key === 'Enter') {
      filter(description);
    }
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
              <div className="field has-addons">
                <div className="control is-expanded">
                  <input
                    className="input"
                    type="text"
                    placeholder="Filtro"
                    onChange={(event) => setDescription(event.target.value)}
                    onKeyUp={(event) => onSearch(event)}
                  />
                </div>
                <div className="control">
                  <button
                    className="button is-primary"
                    onClick={() => onSearch(null)}
                  >
                    Pesquisar
                  </button>
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
