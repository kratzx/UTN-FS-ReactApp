import { useState } from 'react';

const ProductForm = ({ onSubmitForm }) => {
  
  const [form, setForm] = useState({
    name:'',
    description:'',
    price:'0',
    stock:'0',
    sku:'',
  });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setForm({
      ...form, 
      [name]: value});
  }
  
  return(
    <form onSubmit={(e) => {onSubmitForm(e, form)}}>
      <div>
        <label>Nombre </label>
        <input type="text" name="name" value={form.name} onChange={handleChange} required></input>
      </div>
      <div>
        <label>Descripcion </label>
        <input type="text" name="description" value={form.description} onChange={handleChange} required></input>
      </div>
      <div>
        <label>Precio </label>
        <input type="number" name="price" min="0.01" step="0.01" value={form.price} onChange={handleChange}></input>
      </div>
      <div>
        <label>Stock Inicial </label>
        <input type="number" name="stock" min="1" value={form.stock} onChange={handleChange}></input>
      </div>
      <div>
        <label>SKU </label>
        <input type="text" name="sku" value={form.sku} onChange={handleChange} required></input>
      </div>
      <button type="submit"> Añadir </button>
    </form>
  );
}

export default ProductForm;