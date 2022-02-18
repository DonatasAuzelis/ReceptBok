import React, {useState, createContext} from 'react';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  updateProfile,
  updateEmail,
  updatePassword,
  sendPasswordResetEmail,
} from 'firebase/auth';
import {authentication} from './auth';

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({children}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  onAuthStateChanged(authentication, usr => {
    if (usr) {
      setUser(usr);
      setIsLoading(false);
    } else {
      setIsLoading(false);
    }
  });

  const onSendPasswordReset = email => {
    sendPasswordResetEmail(authentication, email)
      .then(() => {
        // Password reset email sent!
        // ..
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };

  const onUpdateImage = image => {
    updateProfile(authentication.currentUser, {
      photoURL: image,
    })
      .then(() => {
        // Profile updated!
        // ...
      })
      .catch(error => {
        // An error occurred
        // ...
      });
  };

  const onUpdateUsername = username => {
    updateProfile(authentication.currentUser, {
      displayName: username,
    })
      .then(() => {
        // Profile updated!
        // ...
      })
      .catch(error => {
        // An error occurred
        // ...
      });
  };

  const onUpdatePassword = password => {
    updatePassword(authentication.currentUser, password)
      .then(() => {
        // Update successful.
        console.log('YAY');
      })
      .catch(error => {
        // An error ocurred
        console.log('NAY');
        // ...
      });
  };

  const onLogin = (email, password) => {
    setIsLoading(true);
    signInWithEmailAndPassword(authentication, email, password)
      .then(u => {
        setUser(u);
        setIsLoading(false);
      })
      .catch(e => {
        setIsLoading(false);
        setError(e.toString());
      });
  };

  const onRegister = (email, password, repeatedPassword) => {
    setIsLoading(true);
    if (password !== repeatedPassword) {
      setError('Error: Passwords do not match!');
      return;
    }
    createUserWithEmailAndPassword(authentication, email, password)
      .then(u => {
        setUser(u);
        setIsLoading(false);
        updateProfile(authentication.currentUser, {
          displayName: 'glöm inte att uppdatera din profil',
          photoURL: 'https://shortpixel.com/img/robot_lookleft_wink_big.png',
        });
      })
      .catch(e => {
        setIsLoading(false);
        setError(e.toString());
      });
  };

  const onLogout = () => {
    signOut(authentication).then(() => {
      setUser(null);
      setError(null);
    });
  };

  return (
    <AuthenticationContext.Provider
      value={{
        isAuthenticated: !!user,
        user,
        isLoading,
        error,
        onLogin,
        onRegister,
        onLogout,
        onUpdateUsername,
        onUpdateImage,
        onUpdatePassword,
      }}>
      {children}
    </AuthenticationContext.Provider>
  );
};
