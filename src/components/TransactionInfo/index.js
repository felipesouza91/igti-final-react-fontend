import React from 'react';

import './styles.css';

function TransactionInfo() {
  return (
    <div className="column is-full">
      <div className="in-row-mode box">
        <div>
          <p>Lancamentos: R$22121321</p>
        </div>
        <div>
          <p>Receitas: R$22121321</p>
        </div>
        <div>
          <p>Despesas: R$22121321</p>
        </div>
        <div>
          <p>Saldo: R$ 100000</p>
        </div>
      </div>
    </div>
  );
}

export default TransactionInfo;
