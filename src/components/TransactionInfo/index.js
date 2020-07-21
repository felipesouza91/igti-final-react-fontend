import React from 'react';
import { formatNumber } from '../../helper/formater';
import './styles.css';

function TransactionInfo({ infos }) {
  return (
    <div className="column is-full">
      <div className="in-row-mode box">
        <div>
          <p>
            Lancamentos:<span>{infos.size}</span>
          </p>
        </div>
        <div>
          <p>
            Receitas:
            <span className="has-text-success">
              {formatNumber(infos.totalReceita)}
            </span>
          </p>
        </div>
        <div>
          <p>
            Despesas:{' '}
            <span className="has-text-danger">
              {formatNumber(infos.totalDespesa)}
            </span>
          </p>
        </div>
        <div>
          <p>
            Saldo:
            <span>{formatNumber(infos.totalReceita - infos.totalDespesa)}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default TransactionInfo;
