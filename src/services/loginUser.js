import firebase from '../config/firebase';

const loginUser = async( form ) => {
  try {
    const response = await firebaseLoginUser(form);
    if (response) {
      console.log('Usuario loggeado con exito!', response.user.uid);
      const doc = await firebase.db.doc('users/' + response.user.uid).get();
      const userData = doc.data();
      console.log('User data found!', userData);
      return userData;
    }
  } catch (error) {
    console.log('Error al loguear el usuario...', error);
  }
}

const firebaseLoginUser = async({ email, password }) => {
  return firebase.auth.signInWithEmailAndPassword(email, password);
}

export default loginUser;