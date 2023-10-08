/* eslint-disable react/prop-types */

const Product = (props) => {
  const { product, onAdd } = props;
  return (
    <div className="card">
      <img src={product.image} alt={product.name} className="small" />
      <h2>{product.name}</h2>
      <div>Php: {product.price.toFixed(2)}</div>
      <div>
        <button type="button" onClick={() => onAdd(product)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
