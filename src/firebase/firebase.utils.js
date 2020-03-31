import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyArw0tyDZLnyYJKG5RmrzgflYMALTOS_To",
    authDomain: "react-e-commerce-db-7b3b3.firebaseapp.com",
    databaseURL: "https://react-e-commerce-db-7b3b3.firebaseio.com",
    projectId: "react-e-commerce-db-7b3b3",
    storageBucket: "react-e-commerce-db-7b3b3.appspot.com",
    messagingSenderId: "993596693613",
    appId: "1:993596693613:web:98011819d26d2ee6023364"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;