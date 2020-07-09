import React, { useState, useContext, useEffect } from 'react';
import { GiftedChat } from 'react-native-gifted-chat';
import {
  renderBubble,
  renderSend,
  scrollToBottomComponent,
  renderLoading,
  renderSystemMessage,
} from '../components/GiftedChat';
import { AuthContext } from '../contexts/AuthContext';
import { sendMessage, sendLatestMessage } from '../api/firestoreAPI';
import { firestore } from '../config/firebase';
import { useStatusBar } from '../hooks/useStatusBar';

export default function RoomScreen({ route }) {
  useStatusBar('light-content');

  const [messages, setMessages] = useState([]);
  const { thread } = route.params;
  const { user } = useContext(AuthContext);
  const currentUser = user.toJSON();

  useEffect(() => {
    const messagesListener = firestore
      .collection('THREADS')
      .doc(thread._id)
      .collection('MESSAGES')
      .orderBy('createdAt', 'desc')
      .onSnapshot((querySnapshot) => {
        const messages = querySnapshot.docs.map((doc) => {
          const firebaseData = doc.data();

          const data = {
            _id: doc.id,
            text: '',
            createdAt: new Date().getTime(),
            ...firebaseData,
          };

          if (!firebaseData.system) {
            data.user = {
              name: firebaseData.user.email,
              ...firebaseData.user,
            };
          }

          return data;
        });

        setMessages(messages);
      });

    return () => messagesListener();
  }, []);

  const handleSend = (messages) => {
    const text = messages[0].text;

    sendMessage(thread, currentUser, text);
    sendLatestMessage(thread, text);
  };

  return (
    <GiftedChat
      messages={messages}
      onSend={handleSend}
      user={{ _id: currentUser.uid }}
      placeholder='New Message'
      alwaysShowSend
      scrollToBottom
      renderBubble={renderBubble}
      renderSend={renderSend}
      scrollToBottomComponent={scrollToBottomComponent}
      renderLoading={renderLoading}
      renderSystemMessage={renderSystemMessage}
    />
  );
}
