import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';

const firebaseConfig = initializeApp({
  apiKey: 'AIzaSyD84UVFCF-Q6PWao22XV6gL6FfBm25S6cI',
  authDomain: 'cookingapp-71e20.firebaseapp.com',
  projectId: 'cookingapp-71e20',
  storageBucket: 'cookingapp-71e20.appspot.com',
  messagingSenderId: '327312531438',
  appId: '1:327312531438:web:4f846919bebfc78b9f38ff',
});

export const authentication = getAuth(firebaseConfig);
export const firestore = getFirestore();
