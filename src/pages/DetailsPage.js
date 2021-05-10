import React, { useState, useEffect }  from 'react';
import { getProducto } from "../services/ItemServices";
import Product from '../components/Product';

const DetailsPage = ( props ) => {
  const id = props.match.params.id;
  const [ loading, setLoading ] = useState(true);
  const [ product, setProduct] = useState([]);

  useEffect(() => {
    // componentDidMount
    getProducto(id)
      .then( data => {
        setProduct(data);
        setLoading(false);
      })
      .catch( (err) => {
        console.log('Hubo un problema con la petición Fetch: ' + err.message);
      })  
    }, 
    [id]
  )

  if( loading ) {
    return(
      <div className={'DetailsPage' + id}>
        loading...
      </div>
    )
  } 
  else {
    return (
      <div className={'DetailsPage' + id}>
        <h2> Product number: {id} </h2>
        <Product product={product} index={id} />
      </div>
    );  
  }
}
export default DetailsPage;