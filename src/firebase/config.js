
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'
import 'firebase/compat/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyBQzbA6cPrDfXj3CE2CeIEM0TlTn-o_a78",
  authDomain: "appchat-5d2d2.firebaseapp.com",
  projectId: "appchat-5d2d2",
  storageBucket: "appchat-5d2d2.appspot.com",
  messagingSenderId: "449955992167",
  appId: "1:449955992167:web:ca52b89fe9426418c4fac2",
  measurementId: "G-73KQFB8BNZ"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

const auth = firebase.auth();
const db = firebase.firestore();

export { auth, db }
export default firebase;