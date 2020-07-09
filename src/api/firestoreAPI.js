import { firestore } from '../config/firebase';

export const sendMessage = async (thread, user, text) => {
  try {
    await firestore
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
};

export const sendLatestMessage = async (thread, text) => {
  try {
    await firestore
      .collection('THREADS')
      .doc(thread._id)
      .set(
        {
          latestMessage: {
            text,
            createdAt: new Date().getTime(),
          },
        },
        { merge: true }
      );
  } catch (err) {
    console.log(err.message);
  }
};

export const createRoom = async (roomName) => {
  try {
    const ref = await firestore.collection('THREADS').add({
      name: roomName,
      latestMessage: {
        text: `You have joined the room ${roomName}`,
        createdAt: new Date().getTime(),
      },
    });

    await ref.collection('MESSAGES').add({
      text: `You have joined the room ${roomName}`,
      createdAt: new Date().getTime(),
      system: true,
    });
  } catch (err) {
    console.log(err.message);
  }
};
