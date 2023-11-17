import React from 'react';
import "../cards/cards.css";


const ProductCard = ({ product }) => {
  return (
    <div className="card">
      <img src={product.image} alt={product.name} />
      <div className="title">{product.name}</div>
      <div className="description">{product.description}</div>
      <div className="price">R$ {product.price}</div>
      <button>Comprar</button>
    </div>
  );
};

export default ProductCard;
1