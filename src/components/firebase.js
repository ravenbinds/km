import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyDSqzMn6PyVjwqxe33MbxvBq11X1UQiVSQ",
    authDomain: "koalam-891ce.firebaseapp.com",
    databaseURL: "https://koalam-891ce-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "koalam-891ce",
    storageBucket: "koalam-891ce.appspot.com",
    messagingSenderId: "575036094070",
    appId: "1:575036094070:web:edf06bb6c2b38d0d04d157",
    measurementId: "G-8936WWMFKW"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;