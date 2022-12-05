// database/firebaseDb.js
import * as firebases from 'firebase';
import firestore from 'firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyDgkU_GSmVgywm0al-6I5Sr_chRmTJHWAY",
    authDomain: "reactnativefirebase-00000.firebaseapp.com",
    databaseURL: null,
    projectId: "social-screens",
    storageBucket: "social-screens.appspot.com",
    messagingSenderId: "441081879061",
    appId: "1:441081879061:android:144b8677933251b2b98c1c"
};
firebase.initializeApp(firebaseConfig);
firebase.firestore();
export default firebases;