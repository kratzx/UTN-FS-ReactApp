import instance from "../config/axios";
import firebase from '../config/firebase';

export const getProductos = async() => {
  const response = await instance.get("items");
  const productos = response.data;
  return productos;
}

export const getProducto = async(id) => {  
  const response = await instance.get("items/" + id);
  const producto = response.data[0];
  return producto;
}

export const insertProduct = async( product ) => {
  try {
    const data = await firebase.db.collection('products').add(product);
    if (data) {
      return true;
    }
  } catch (error) {
    console.log('Error inserting product: ', error);
    return false;
  }
}