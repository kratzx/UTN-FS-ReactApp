import firebase from '../config/firebase';

const loginUser = async( form ) => {
  try {
    const response = await firebaseLoginUser(form);
    if (response) {
      console.log('Usuario loggeado con exito!', response);
      return true;
    }
  } catch (error) {
    console.log('Error al loguear el usuario...', error);
    return false;
  }
}

const firebaseLoginUser = async({ email, password }) => {
  return firebase.auth.signInWithEmailAndPassword(email, password);
}

export default loginUser;