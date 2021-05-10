import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: process.key.FB_APIKEY,
  authDomain: process.key.FB_AUTHDOMAIN,
  databaseURL: process.key.FB_DATABASEURL,
  projectId: process.key.FB_PROJECTID,
  storageBucket: process.key.FB_STORAGEBUCKET,
  messagingSenderId: process.key.FB_MESSAGINGSENDERID,
  appId: process.key.FB_APPID,
  measurementId: process.key.FB_MESUREMENTID
};
firebase.initializeApp(firebaseConfig);
firebase.auth = firebase.auth();
firebase.db = firebase.firestore();

export default firebase;
