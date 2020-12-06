// const admin = require('firebase-admin');
// admin.initializeApp();

const auth = firebase.auth();

const db = firebase.firestore();
<<<<<<< HEAD
const users = db.collection("users");
=======
const usersCollection = db.collection("users");
>>>>>>> 9d2a12ad54da61689865da6b8cd317d9c7b5cbaa

const firebaseConfig = {
    apiKey: "AIzaSyD3B4pVY_hz-8nPstgjKXv-EX-5dq49I2U",
    authDomain: "fantasy-artist-league.firebaseapp.com",
    databaseURL: "https://fantasy-artist-league.firebaseio.com",
    projectId: "fantasy-artist-league",
    storageBucket: "fantasy-artist-league.appspot.com",
    messagingSenderId: "691127190203",
    appId: "1:691127190203:web:e6ca654860f6381b2b9f9e",
    measurementId: "G-26RTVNF95G"
  };

<<<<<<< HEAD
const firebase = require('firebase');
const firestore = require('firebase/firestore')
=======
>>>>>>> 9d2a12ad54da61689865da6b8cd317d9c7b5cbaa
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

<<<<<<< HEAD
module.exports = {admin, db, firestore, firebase, database, users, auth};
=======
module.exports = {db, usersCollection, auth};
>>>>>>> 9d2a12ad54da61689865da6b8cd317d9c7b5cbaa
