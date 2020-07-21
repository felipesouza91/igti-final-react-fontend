import React, { useEffect, useState } from 'react';
import { eachMonthOfInterval, format } from 'date-fns';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import './styles.css';

function DateSelect({ filter, value }) {
  function handleChange(date) {
    filter(date);
  }
  const [months, setMonths] = useState([]);
  const [selected, setSelected] = useState();
  const [disabled, setDisabled] = useState(false);
  const [disabledAfter, setDisabledAfter] = useState(false);
  useEffect(() => {
    setSelected(value);
    const dates = eachMonthOfInterval({
      start: new Date(2018, 12, 1),
      end: new Date(2021, 11, 12),
    });
    const months = dates.map((date) => {
      return {
        id: format(date, 'yyyy-MM'),
        title: format(date, 'MMM/yyyy'),
      };
    });
    setMonths(months);
  }, [value]);

  function handleBefore() {
    const index = months.findIndex((month) => month.id === value);

    if (index >= 1) {
      handleChange(months[index - 1].id);
      setSelected(months[index - 1].id);
      setDisabledAfter(false);
    } else {
      setDisabled(!disabled);
    }
  }
  function handleAfter() {
    const index = months.findIndex((month) => month.id === value);
    if (index < months.length - 1) {
      handleChange(months[index + 1].id);
      setSelected(months[index + 1].id);
      setDisabled(false);
    } else {
      setDisabledAfter(!disabled);
    }
  }

  return (
    <div className="column is-full">
      <div className="is-center">
        <div className="field is-grouped">
          <div className="control">
            <button
              className="button is-link"
              onClick={handleBefore}
              disabled={disabled}
            >
              <FaArrowLeft size={20} color="#fff" />
            </button>
          </div>
          <div className="control">
            <div className="select">
              <select
                onChange={(event) => handleChange(event.target.value)}
                value={selected}
              >
                {months.map((mount) => (
                  <option key={mount.id} value={mount.id}>
                    {mount.title}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="control">
            <button
              className="button is-link"
              onClick={handleAfter}
              disabled={disabledAfter}
            >
              <FaArrowRight size={20} color="#fff" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DateSelect;
