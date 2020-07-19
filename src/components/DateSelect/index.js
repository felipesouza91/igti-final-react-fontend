import React from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import './styles.css';

function DateSelect() {
  return (
    <div className="column is-full">
      <div className="is-center">
        <div className="field is-grouped">
          <div className="control">
            <button className="button is-link">
              <FaArrowLeft size={20} color="#fff" />
            </button>
          </div>
          <div className="control">
            <div className="select">
              <select>
                <option>nov/2021</option>
                <option>dez/2021</option>
              </select>
            </div>
          </div>
          <div className="control">
            <button className="button is-link">
              <FaArrowRight size={20} color="#fff" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DateSelect;
