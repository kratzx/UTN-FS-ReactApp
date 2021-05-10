import React, { useState } from 'react';
import Purchase from './Purchase';

const Product = ({ product, index }) => {

  const [ message, setMessage ] = useState('');

  const productBought = () => {
    setMessage('Thanks for your purchase!');
  }
  return (
    <div key={'product'+product.id} className={'Product' + index}>
      <div className='Name'>          Name: {product.name}</div>
      <div className='Sku'>           SKU: {product.sku}</div> 
      <div className='Description'>   Description: {product.description}</div>
      <div className='Price'>         Price: ${product.price}</div>
      <div className='Stock'>         Stock: {product.stock} units</div>
      <div className='Message'>       {message} </div> 
      <Purchase index={product.id} clickPurchaseHandler={productBought} />
      <br/>
    </div>
  );
}

export default Product;