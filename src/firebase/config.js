import { initializeApp } from 'firebase/app';
import { getFirestore, serverTimestamp } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyATvv0oqh6BMyqNFUeDDslMllB9dbITaFo",
    authDomain: "blog-b435c.firebaseapp.com",
    projectId: "blog-b435c",
    storageBucket: "blog-b435c.appspot.com",
    messagingSenderId: "1042075018626",
    appId: "1:1042075018626:web:36aa364f7acabddf615b9b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const projectFirestore = getFirestore(app);

export { projectFirestore, serverTimestamp };
