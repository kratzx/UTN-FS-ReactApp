import React, { useState } from 'react';
import ProductForm from '../components/forms/ProductForm';
import { insertProduct } from '../services/ItemServices';

const AddProductPage = () => {

  const [inserted, setInserted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (event, form) => {
    event.preventDefault();
    setLoading(true);
    insertProduct(form).then((success) => {
      setInserted(success);
      setLoading(false);
    });
  }

  if (!inserted && !loading) {
    return (
      <div key='insert' className="Insert">
        <h2> Formulario de Agregar un producto </h2>
        <ProductForm 
          onSubmitForm={handleSubmit}/>
      </div>
    );
  }
  if (loading) {
    return (
      <div className='loadingInsert'>
        inserting...
      </div>
    );
  }
  if (inserted) {
    return (
      <div key='insertedsuccess' className="InsertedSuccess">
        <h2> Producto agregado con exito! </h2>
      </div>
    );
  }
}

export default AddProductPage;