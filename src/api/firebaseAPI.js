import { firebase } from '../config/firebase';

export async function register(email, password) {
  try {
    await firebase.auth().createUserWithEmailAndPassword(email, password);
  } catch (err) {
    console.log(err.message);
  }
}

export async function login(email, password) {
  try {
    await firebase.auth().signInWithEmailAndPassword(email, password);
  } catch (err) {
    console.log(err.message);
  }
}

export async function logout() {
  try {
    await firebase.auth().signOut();
  } catch (err) {
    console.log(err.message);
  }
}

export async function sendMessage(thread, user, text) {
  try {
    await firebase
      .firestore()
      .collection('THREADS')
      .doc(thread._id)
      .collection('MESSAGES')
      .add({
        text,
        createdAt: new Date().getTime(),
        user: {
          _id: user.uid,
          email: user.email,
        },
      });
  } catch (err) {
    console.log(err.message);
  }
}
