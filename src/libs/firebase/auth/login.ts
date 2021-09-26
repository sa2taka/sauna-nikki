import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from 'firebase/auth';

export const loginByGoogle = () => {
  const provider = new GoogleAuthProvider();
  const auth = getAuth();

  return signInWithPopup(auth, provider);
};

export const logout = () => {
  const auth = getAuth();

  return signOut(auth);
};
