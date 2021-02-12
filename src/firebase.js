// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB7Fdma57fd78vY0eB2QnEi-XkRfJR2q1g",
  authDomain: "clone-6dd31.firebaseapp.com",
  projectId: "clone-6dd31",
  storageBucket: "clone-6dd31.appspot.com",
  messagingSenderId: "713657358984",
  appId: "1:713657358984:web:298f083e07846958bddd3d",
  measurementId: "G-4N4Q50579G",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
