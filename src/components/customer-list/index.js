import React, { useState } from 'react';
import './index.css';

function CustomerList() {
  let [customer, setCustomer] = useState('');
  let [customerList, setCustomerList] = useState([]);

  const handleChange = (e) => {
    setCustomer(e.target.value);
  };

  const handleSubmit = () => {
    customer.length && setCustomerList((prevState) => [...prevState, customer]);
    setCustomer('');
  };

  return (
    <div className='mt-75 layout-column justify-content-center align-items-center'>
      <h1>Tech Mahindra React Hacker rank challenge</h1>
      <section className='layout-row align-items-center justify-content-center'>
        <input
          type='text'
          className='large'
          placeholder='Name'
          data-testid='app-input'
          value={customer}
          onChange={(e) => handleChange(e)}
        />
        <button
          type='submit'
          className='ml-30'
          data-testid='submit-button'
          onClick={handleSubmit}
          disabled={customer.length ? false : true}
        >
          Add Customer
        </button>
      </section>

      <ul className='styled mt-50' data-testid='customer-list'>
        <h3>Customer list</h3>
        {customerList.length ?
          customerList.map((item, index) => {
            return (
              <li
                className='slide-up-fade-in'
                data-testid='list-item1'
                key={index}
              >
                {item}
              </li>
            );
          }):""}
      </ul>
    </div>
  );
}

export default CustomerList;
