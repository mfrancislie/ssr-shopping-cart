/* eslint-disable react/prop-types */
import Product from './Product';

const Main = (props) => {
  const { cartItems, products, onAdd, onRemove } = props;
  return (
    <div className="col-2 block">
      <h1>Products</h1>
      <div className="row">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            item={cartItems.find((x) => x.id === product.id)}
            onAdd={onAdd}
            onRemove={onRemove}
          />
        ))}
      </div>
    </div>
  );
};

export default Main;
