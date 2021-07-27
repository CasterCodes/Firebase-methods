const firebase = require("firebase/app");

require("firebase/firestore");

require("firebase/auth");

const firebaseConfig = {
  apiKey: "AIzaSyBst4his_g_FDdZvPvAYwdkP6RA_ZFxjVg",
  authDomain: "fir-reference-ff0c6.firebaseapp.com",
  projectId: "fir-reference-ff0c6",
  storageBucket: "fir-reference-ff0c6.appspot.com",
  messagingSenderId: "817385583496",
  appId: "1:817385583496:web:698b18b83d52549704803d",
  measurementId: "G-XXBP206LM7",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

module.exports = firebase;
