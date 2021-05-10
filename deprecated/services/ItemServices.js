import instance from "../config/axios";

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