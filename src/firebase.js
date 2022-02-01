import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCq00vOwHyhy-dfaMMlvRvpIMkCDWYc1cs",
    authDomain: "disney-plus-clone-52755.firebaseapp.com",
    projectId: "disney-plus-clone-52755",
    storageBucket: "disney-plus-clone-52755.appspot.com",
    messagingSenderId: "538917461190",
    appId: "1:538917461190:web:35fbd9797afc808ee0cbc7"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();
  
  export { auth, provider, storage };
  export default db;