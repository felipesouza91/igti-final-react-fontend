import React from 'react';
import { FaTrash, FaPencilAlt } from 'react-icons/fa';
import './styles.css';

function Transaction({ isDebid }) {
  return (
    <div
      className={`box box-overrid ${
        isDebid ? `has-background-danger	` : `has-background-success	`
      }`}
    >
      <article className="media center">
        <figure className="media-left">
          <label className="label">1</label>
        </figure>
        <div className="media-content ">
          <div className="content justify-content">
            <div className="info-transaction">
              <div>
                <strong>Lazer</strong>
                <br />
                Almoço em restaurante
              </div>
              <div>
                <strong className="title is-3 is-bold">R$ 35,00</strong>
              </div>
            </div>
            <div className="icon-container ">
              <div className="icon">
                <FaPencilAlt size={20} color="#FFF" />
              </div>
              <div className="icon">
                <FaTrash size={20} color="#FFF" />
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}

export default Transaction;
