
import firebase from "firebase"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCQG8X6UFQjjf2TXEsU3Lsjnv9EoCdaAFg",
    authDomain: "react-portfolio-45245.firebaseapp.com",
    projectId: "react-portfolio-45245",
    storageBucket: "react-portfolio-45245.appspot.com",
    messagingSenderId: "161953186019",
    appId: "1:161953186019:web:4c41a04dacb91e82ac05d6",
    measurementId: "G-93BHW87EBS"
});

var db = firebaseApp.firestore()

export {db};
