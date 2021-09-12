
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyAw_-UInXqSuJqwtgUb4SW7-TqBiC4OKWE",
    authDomain: "ecom-shop-8d84f.firebaseapp.com",
    projectId: "ecom-shop-8d84f",
    storageBucket: "ecom-shop-8d84f.appspot.com",
    messagingSenderId: "294191185596",
    appId: "1:294191185596:web:78e583148b81b3f6799ab9",
    measurementId: "G-VX2VM3CG8D"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore =firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;