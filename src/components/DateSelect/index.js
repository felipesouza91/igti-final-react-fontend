import React, { useEffect, useState } from 'react';
import { eachMonthOfInterval, format } from 'date-fns';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import './styles.css';

function DateSelect() {
  const [months, setMonths] = useState([]);
  useEffect(() => {
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
  }, []);

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
                {months.map((mount) => (
                  <option key={mount.id} value={mount.id}>
                    {mount.title}
                  </option>
                ))}
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
