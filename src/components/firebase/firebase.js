import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyB8dU4Moeco7V35atcsCzr9TAF6swhVoyI",
    authDomain: "react-animales-antonio.firebaseapp.com",
    projectId: "react-animales-antonio",
    storageBucket: "react-animales-antonio.appspot.com",
    messagingSenderId: "77488199996",
    appId: "1:77488199996:web:66ab881ba2f6dcc4e42639"
  };

  const app = firebase.initializeApp(firebaseConf);

  export Function getFirebase{
      return app;
  }

  export const database = firebase.firestore();
  