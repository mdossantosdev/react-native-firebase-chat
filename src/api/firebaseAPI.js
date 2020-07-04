import { firebase } from '../config/firebase';

export async function register(email, password) {
  try {
    await firebase.auth().createUserWithEmailAndPassword(email, password);
  } catch (err) {
    console.log(err.message);
  }
}
