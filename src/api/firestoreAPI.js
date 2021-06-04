import { firestore } from '../config/firebase';

export const createRoom = async (roomName) => {
  try {
    const ref = await firestore.collection('ROOMS').add({
      name: roomName,
      latestMessage: {
        text: `You have joined the room ${roomName}`,
        createdAt: new Date().getTime(),
      },
    });

    await ref.collection('MESSAGES').add({
      text: roomName,
      createdAt: new Date().getTime(),
      system: true,
    });
  } catch (err) {
    console.log(err.message);
  }
};

export const sendMessage = async (room, user, text, location) => {
  try {
    await firestore
      .collection('ROOMS')
      .doc(room._id)
      .collection('MESSAGES')
      .add({
        text,
        location,
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

export const sendLatestMessage = async (room, text) => {
  try {
    await firestore
      .collection('ROOMS')
      .doc(room._id)
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
