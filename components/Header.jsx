import React from 'react';

const Header = (props) => {
  const { countCartItems } = props;
  return (
    <header className="row block center">
      <a href="#/">
        <h1>Shopping Cart</h1>
      </a>

      <div>
        <a href="#/cart">Cart</a>
        {countCartItems ? (
          <button className="badge">{countCartItems}</button>
        ) : (
          ''
        )}
        <a href="#/signup">Signup</a>
      </div>
    </header>
  );
};

export default Header;
