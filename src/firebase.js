import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyCJ07JLQ_MKrfGXEtzaQeMchvxzLjPatJg",
    authDomain: "netflix-clone-5dc59.firebaseapp.com",
    projectId: "netflix-clone-5dc59",
    storageBucket: "netflix-clone-5dc59.appspot.com",
    messagingSenderId: "473504778465",
    appId: "1:473504778465:web:f41514cec299ef880f8fa0",
    measurementId: "G-MQ3Q2TM5WT"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export default db;
export { auth };
