import { auth } from '../config/firebase';

export const register = async (email, password) => {
  try {
    await auth.createUserWithEmailAndPassword(email, password);
  } catch (err) {
    console.log(err.message);
  }
};

export const login = async (email, password) => {
  try {
    await auth.signInWithEmailAndPassword(email, password);
  } catch (err) {
    console.log(err.message);
  }
};

export const logout = async () => {
  try {
    await auth.signOut();
  } catch (err) {
    console.log(err.message);
  }
};
