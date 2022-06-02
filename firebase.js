// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCrzurQVpi-kE0rQlhTrShR9w6VdBThQio",
  authDomain: "fir-auth-c4453.firebaseapp.com",
  projectId: "fir-auth-c4453",
  storageBucket: "fir-auth-c4453.appspot.com",
  messagingSenderId: "978007044142",
  appId: "1:978007044142:web:4cebd55d7d4471c7af6fbf"
};


// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()

export { auth }; 