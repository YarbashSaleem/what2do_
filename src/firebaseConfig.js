import firebase from 'firebase';
const config = {
    apiKey: "AIzaSyAL-QbMCgoDZ4WlJ5YYZCU77sxnlxyibWA",
    authDomain: "what2do-95a53.firebaseapp.com",
    databaseURL: "https://what2do-95a53.firebaseio.com",
    projectId: "what2do-95a53",
    storageBucket: "what2do-95a53.appspot.com",
    messagingSenderId: "84740133180",
    appId: "1:84740133180:web:0f8e0fc000e5da89a48e39"
  };
  firebase.initializeApp(config);
export const auth = firebase.auth();