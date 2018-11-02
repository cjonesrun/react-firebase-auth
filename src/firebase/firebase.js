import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const prodConfig = {
  apiKey: "x",
  authDomain: "x.firebaseapp.com",
  databaseURL: "https://x.firebaseio.com",
  projectId: "x",
  storageBucket: "x.appspot.com",
  messagingSenderId: "x"
};

const devConfig = {
  apiKey: "x",
  authDomain: "x.firebaseapp.com",
  databaseURL: "https://x.firebaseio.com",
  projectId: "x",
  storageBucket: "x.appspot.com",
  messagingSenderId: "x"
};

const config = process.env.NODE_ENV === 'production'
  ? prodConfig
  : devConfig;

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const auth = firebase.auth();
const db = firebase.database();

export {
  db,
  auth,
};
