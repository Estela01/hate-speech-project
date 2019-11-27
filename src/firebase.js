import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBaOdebRBaqs4Uxa4YIuAWLUA1d-WDlzac",
  authDomain: "hatespeech-6e35c.firebaseapp.com",
  databaseURL: "https://hatespeech-6e35c.firebaseio.com",
  projectId: "hatespeech-6e35c",
  storageBucket: "hatespeech-6e35c.appspot.com",
  messagingSenderId: "179433306611",
  appId: "1:179433306611:web:ac19b4d60376289f993a86"
};

firebase.initializeApp(firebaseConfig);
export default firebase;
