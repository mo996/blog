import { initializeApp } from 'firebase/app';
import { getFirestore, serverTimestamp } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "...",
    authDomain: "....firebaseapp.com",
    projectId: "blog-...",
    storageBucket: "blog-....appspot.com",
    messagingSenderId: "...",
    appId: "1:...:web:36aa364f7acabddf615b9b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const projectFirestore = getFirestore(app);

export { projectFirestore, serverTimestamp };
