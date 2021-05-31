import { auth } from '../config/firebase';

export const register = async (email, password) => {
  try {
    await auth.createUserWithEmailAndPassword(email, password);
  } catch (error) {
    throw new Error(error.message);
  }
};

export const login = async (email, password) => {
  try {
    await auth.signInWithEmailAndPassword(email, password);
  } catch (error) {
    throw new Error(error.message);
  }
};

export const logout = async () => {
  try {
    await auth.signOut();
  } catch (error) {
    console.error(error.message);
  }
};
