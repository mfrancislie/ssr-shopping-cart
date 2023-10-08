import React from 'react';

const Basket = (props) => {
  const { cartItems, onAdd, onRemove } = props;
  const itemPrice = cartItems.reduce(
    (accumValue, currentValue) =>
      accumValue + currentValue.price * currentValue.qty,
    0
  );
  const taxPrice = itemPrice * 0.14;
  const shippingPrice = itemPrice > 2000 ? 0 : 50;
  const totalPrice = itemPrice + taxPrice + shippingPrice;

  return (
    <div className="block col-1">
      <h1>Cart Item</h1>
      {cartItems.length === 0 && <div>No CartItem</div>}

      {cartItems.map((item) => (
        <div className="row" key={item.id}>
          <div>{item.name}</div>
          <div>
            <button onClick={() => onAdd(item)} className="add">
              +
            </button>
            <button onClick={() => onRemove(item)} className="remove">
              -
            </button>
          </div>
          <div className=" text-right">
            {item.qty} x {item.price.toFixed(2)}
          </div>
        </div>
      ))}
      {cartItems.length !== 0 && (
        <>
          <hr />
          <div className="row">
            <div className="col-2">Item Price: </div>
            <div className="col-2">{itemPrice.toFixed(2)}</div>
          </div>
          <div className="row">
            <div className="col-2">Tax Price: </div>
            <div className="col-2">{taxPrice.toFixed(2)}</div>
          </div>
          <div className="row">
            <div className="col-2">Shippin Price: </div>
            <div className="col-2">{shippingPrice.toFixed(2)}</div>
          </div>
          <div className="row">
            <div className="col-2">
              <strong>Total Price:</strong>{' '}
            </div>
            <div className="col-2">
              <strong>{totalPrice.toFixed(2)}</strong>
            </div>
          </div>
          <hr />
          <div className="row">
            <button
              type="submit"
              onClick={() => alert('Check out and Proceed Payment')}
            >
              Check out{' '}
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Basket;
