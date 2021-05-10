import React from 'react';
import Detail from './Detail';

const Product = ({ product, index }) => {
  return (
    <div key={'preview' + index} className={'Product' + index}>
      <div className='Name'> Name: {product.name}</div>
      <Detail id={product.id}/>
      <br/>
    </div>
  );    
}

export default Product;