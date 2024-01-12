import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDljCnlyzxFpq7jmiJFLb_o_lZk_j7TqzU',
  authDomain: 'nextjs-14-802c5.firebaseapp.com',
  projectId: 'nextjs-14-802c5',
  storageBucket: 'nextjs-14-802c5.appspot.com',
  messagingSenderId: '230918771926',
  appId: '1:230918771926:web:de3287810a5169b9556577',
  measurementId: 'G-Z4RZC8K6L0',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
