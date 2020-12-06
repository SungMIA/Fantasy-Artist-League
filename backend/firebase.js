const admin = require('firebase-admin');
admin.initializeApp();

const auth = firebase.auth();

const db = firebase.firestore();
const users = db.collection("users");

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

const firebase = require('firebase');
const firestore = require('firebase/firestore')
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

module.exports = {admin, db, firestore, firebase, database, users, auth};