//import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyCJ07JLQ_MKrfGXEtzaQeMchvxzLjPatJg",
    authDomain: "netflix-clone-5dc59.firebaseapp.com",
    projectId: "netflix-clone-5dc59",
    storageBucket: "netflix-clone-5dc59.appspot.com",
    messagingSenderId: "473504778465",
    appId: "1:473504778465:web:f41514cec299ef880f8fa0",
    measurementId: "G-MQ3Q2TM5WT"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();

// export { auth };
// export default db;
// export { firebaseApp }