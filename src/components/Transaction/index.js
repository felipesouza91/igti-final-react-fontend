import React from 'react';
import { formatNumber } from '../../helper/formater';
import { FaTrash, FaPencilAlt } from 'react-icons/fa';
import api from '../../services/api';
import './styles.css';

function Transaction({ value, edit, show, deleteItem }) {
  async function handleEdit() {
    edit(value);
    show(true);
  }
  function handleDelete() {
    deleteItem(value._id);
  }

  return (
    <div
      className={`box box-overrid ${
        value.type === '-' ? `has-background-danger	` : `has-background-success	`
      }`}
    >
      <article className="media center">
        <figure className="media-left">
          <label className="label">{value.day}</label>
        </figure>
        <div className="media-content ">
          <div className="content justify-content">
            <div className="info-transaction">
              <div>
                <strong>{value.category}</strong>
                <br />
                {value.description}
              </div>
              <div>
                <strong className="title is-3 is-bold">
                  {formatNumber(value.value)}
                </strong>
              </div>
            </div>
            <div className="icon-container">
              <button className="button is-white" onClick={handleEdit}>
                <FaPencilAlt size={17} color="#FFF" />
              </button>
              <button className="button is-white" onClick={handleDelete}>
                <FaTrash size={17} color="#FFF" />
              </button>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}

export default Transaction;
