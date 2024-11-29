import React, { useState } from 'react';
import PropTypes from 'prop-types';
import "./Kitch.css";

const OrderDetails = ({
  orderType,
  tableNo,
  customerName,
  items,
  cookingRequest,
  customizations,
  status: initialStatus,
  onStatusChange
}) => {
  // Initialize the status state with the passed-in initialStatus
  const [status, setStatus] = useState(initialStatus);

  // Handle the "Accept Order" button click
  const handleAcceptOrder = () => {
    setStatus('In Progress');
    onStatusChange('In Progress'); // Call the parent's onStatusChange function
  };

  // Handle the "Deliver Order" button click
  const handleDeliverOrder = () => {
    setStatus('Delivered');
    onStatusChange('Delivered'); // Call the parent's onStatusChange function
  };

  return (
    <div className="order-details">
      <div className='Header'>
        <h2>Order Type</h2>
        <button className="onsite-button">{orderType}</button>
      </div>

      <div className="order-info">
        <div>
          <div className="field1">
            <label>Table No:</label>
            <p>
              <span className="circle">{tableNo}</span>
            </p>
          </div>

          <div className="field1">
            <label>Customer Name:</label>
            <p>
              {customerName}
            </p>
          </div>

          <div className="field1">
            <label>Item Quantity:</label>
            <p>
              <span className="circle2">
                {Array.isArray(items) ? items.reduce((sum, item) => sum + item.quantity, 0) : 0}
              </span>
            </p>
          </div>
        </div>


        <div className="field">
          <label>Item Name:</label>
          <div className="item-list">
            {Array.isArray(items) &&
              items.map((item, index) => (
                <div key={index} className="item-button">
                  {`${item.name} (${item.quantity})`}
                </div>
              ))}
          </div>
        </div>

        <div className="field">
          <label>Cooking Request:</label>
          <span>{cookingRequest}</span>
        </div>

        <div className="field">
          <label>Customization:</label>
          <span>{customizations}</span>
        </div>
      </div>

      <div className="order-status">
        <div className={`status ${status.toLowerCase().replace(' ', '')}`}>
          <span className="dot"></span>
          <span>{status}</span>
        </div>

        {/* Show "Accept Order" button if status is not "In Progress" or "Delivered" */}
        {status !== 'In Progress' && status !== 'Delivered' && (
          <button
            className="delivered-button"
            onClick={handleAcceptOrder}
          >
            Accept Order
          </button>
        )}

        {/* Show "Deliver Order" button if status is "In Progress" */}
        {status === 'In Progress' && (
          <button
            className="delivered-button"
            onClick={handleDeliverOrder}
          >
            Deliver Order
          </button>
        )}
      </div>
    </div>
  );
};

OrderDetails.propTypes = {
  orderType: PropTypes.string.isRequired,
  tableNo: PropTypes.number.isRequired,
  customerName: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      quantity: PropTypes.number.isRequired,
    })
  ),
  cookingRequest: PropTypes.string,
  customizations: PropTypes.string,
  status: PropTypes.string.isRequired,
  onStatusChange: PropTypes.func.isRequired,
};

OrderDetails.defaultProps = {
  cookingRequest: '',
  customizations: '',
  items: [], // Default to an empty array
};

export default OrderDetails;
