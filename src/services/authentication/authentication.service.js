import {signInWithEmailAndPassword} from 'firebase/auth';
import {authentication} from './auth';

export const loginRequest = (email, password) => {
  signInWithEmailAndPassword(authentication, email, password);
};
