import instance from "../config/axios";
import firebase from '../config/firebase';

export const getProductos = async() => {
  try {
    const { docs } = await firebase.db.collection('products').get();
    const products = mapAllProducts(docs);
    return products;
  } catch (error) {
    console.log('Error getting all products: ', error);
  }
}

export const getProducto = async( id ) => {
  try {
    const doc = await firebase.db.doc('products/' + id).get();
    const product = mapOneProduct(doc);
    return product;
  } catch (error) {
    console.log('Error getting the product: ', error);
  }
}

export const insertProduct = async( product ) => {
  try {
    const data = await firebase.db.collection('products').add(product);
    if (data) {
      console.log('Producto agregado con exito: ', data)
      return true;
    }
  } catch (error) {
    console.log('Error inserting product: ', error);
    return false;
  }
}

const mapAllProducts = ( docs ) => {
  let products = [];
  docs.forEach( (item) => {
    products.push(mapOneProduct(item));
  });
  return products;
}

const mapOneProduct = ( doc ) => {
  let product = {
    id: doc.id,
    name: doc.data().name,
    price: doc.data().price,
    stock: doc.data().stock,
    description: doc.data().description,
    sku: doc.data().sku,
  }
  return product;
}