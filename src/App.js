import React, { useState } from 'react';
import Kitch from './component/Kitch';

const App = () => {
  const [statuses, setStatuses] = useState(['', '', '']);

  const handleStatusChange = (index, newStatus) => {
    const updatedStatuses = [...statuses];
    updatedStatuses[index] = newStatus;
    setStatuses(updatedStatuses);
    console.log(`Order ${index + 1} status updated to: ${newStatus}`);
  };

  const orders = [
    {
      orderType: 'Onsite',
      tableNo: 1,
      customerName: 'Ramjibhai',
      items: [
        { name: 'Dhosa', quantity: 1 },
        { name: 'Manchurian', quantity: 2 },
        { name: 'Pav Bhaji', quantity: 2 },
      ],
      cookingRequest: 'Make it a little spicy & creamy.',
      customizations: '(1) 100% Wheat Crust, (2) Large, (3) Jalapeno',
    },
    {
      orderType: 'Onsite',
      tableNo: 2,
      customerName: 'Sureshbhai',
      items: [
        { name: 'Pizza', quantity: 1 },
        { name: 'Pasta', quantity: 1 },
        { name: 'Salad', quantity: 1 },
      ],
      cookingRequest: 'Extra cheese on the pizza.',
      customizations: '(1) Gluten-Free Crust, (2) Medium, (3) No Onion',
    },
    {
      orderType: 'Onsite',
      tableNo: 3,
      customerName: 'Bhaveshbhai',
      items: [
        { name: 'Burger', quantity: 3 },
        { name: 'Fries', quantity: 2 },
      ],
      cookingRequest: 'Add extra ketchup packets.',
      customizations: '(1) Veg Patty, (2) Large Combo',
    },
  ];

  return (
   
     <div>
      <div className='navebar' >
      <h3>Order Lists</h3>
      <span style={{display:"flex"}}>Order Pending: 
      <p>07</p>
      </span>
      </div>
    <div className="app">
      
     
      {orders.map((order, index) => (
        <Kitch
          key={index}
          {...order}
          status={statuses[index]}
          onStatusChange={(newStatus) => handleStatusChange(index, newStatus)}
        />
      ))}
    </div>
    </div>
  );
};


export default App;
