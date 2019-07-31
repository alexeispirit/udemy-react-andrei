import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBXYGeVlagzGkLQ0rFJONfi15nohC5Lyy8",
  authDomain: "crwn-shop-data.firebaseapp.com",
  databaseURL: "https://crwn-shop-data.firebaseio.com",
  projectId: "crwn-shop-data",
  storageBucket: "",
  messagingSenderId: "293661452253",
  appId: "1:293661452253:web:6e8b9fb512ce072c"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
