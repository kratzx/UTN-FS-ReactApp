import firebase from '../config/firebase';

const registerUser = async (form) => {
  try {
    const uid = await firebaseCreateUser(form);
    const data = await firebaseAddUserToDB(form, uid);
    if (data) {
      return true;
    }
  }
  catch (error) {
    console.log("Error al crear usuario: ", error);
    return false;
  }
}
const firebaseCreateUser = async ({email, password, passwordConfirm}) => {
  if (password === passwordConfirm) {
    const { user } = await firebase.auth.createUserWithEmailAndPassword(email, password)
    console.log("Usuario creado!", user.uid);
    return user.uid;
  }
  else {
    throw new Error('Contraseña no es igual en ambos campos');
  }  
}
const firebaseAddUserToDB = async (form, userId) => {
  const data = await firebase.db.collection('users').doc(userId).set({
    nombre: form.nombre,
    apellido: form.apellido,
    email: form.email,
    userId: userId
  })
  console.log("DB actualizada con exito!", data);
  return data;
}
export default registerUser;