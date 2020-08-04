
  import firebase from 'firebase';

  const firebaseApp = firebase.initializeApp({
    //  your firebase credentials
  });

  const db = firebaseApp.firestore();

  export default db;
 