import React, { useState, useEffect } from 'react';
import { getProductos } from "../services/ItemServices";
import ProductPreview from '../components/ProductPreview'

const HomePage = () => {
  const [ products, setProducts ] = useState( [] );
  const [ loading, setLoading ] = useState( true );

  useEffect(() => {
    // componentDidMount
    getProductos()
      .then( data => {
        setProducts(data);
        setLoading(false);
      })
      .catch( (err) => {
        console.log('Hubo un problema con la petición Fetch: ' + err.message );
      })
  }, [])

  if( loading ) {
    return(
      <div key='homeloading' className='HomeLoading'>
        loading...
      </div>
    )
  }
  else {
    return (
      <div key='home' className='Home'>
        <h2> Home </h2>
        {products.map( (product, index) => (
          <ProductPreview product={product} index={index} />
        ))}
      </div>
    );  
  }
}
export default HomePage;