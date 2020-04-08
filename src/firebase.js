import firebase from "firebase";

const config = {
    apiKey: "AIzaSyCXO7BZW4lAEYBRg_mof07YZII_t3CUQng",
    authDomain: "apptrendeldinero.firebaseapp.com",
    databaseURL: "https://apptrendeldinero.firebaseio.com",
    projectId: "apptrendeldinero",
    storageBucket: "project-id.appspot.com",
    messagingSenderId: "810000659195",
    appID: "1:810000659195:web:ee6a6814cbb45b143d765e",
    measurementId: "G-7N39EG7RR1"
};
// Initialize Firebase


firebase.initializeApp(firebaseConfig);


export default firebase;