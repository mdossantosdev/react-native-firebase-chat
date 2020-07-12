import React, { useState, useContext, useEffect } from 'react';
import { useTheme } from 'react-native-paper';
import { GiftedChat } from 'react-native-gifted-chat';
import {
  renderLoading,
  renderSystemMessage,
  renderBubble,
  scrollToBottomComponent,
  renderInputToolbar,
  renderComposer,
  renderSend,
  renderActions,
} from '../components/GiftedChat';
import { AuthContext } from '../context/AuthContext';
import { sendMessage, sendLatestMessage } from '../api/firestoreAPI';
import { firestore } from '../config/firebase';
import { useStatusBar } from '../hooks/useStatusBar';

export default function RoomScreen({ route }) {
  useStatusBar('light-content');

  const { colors } = useTheme();
  const [messages, setMessages] = useState([]);
  const { room } = route.params;
  const { user } = useContext(AuthContext);
  const currentUser = user.toJSON();

  useEffect(() => {
    const messagesListener = firestore
      .collection('ROOMS')
      .doc(room._id)
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

    sendMessage(room, currentUser, text);
    sendLatestMessage(room, text);
  };

  return (
    <GiftedChat
      messages={messages}
      onSend={handleSend}
      user={{ _id: currentUser.uid }}
      placeholder='New Message'
      alwaysShowSend
      scrollToBottom
      alignTop
      messagesContainerStyle={{ paddingBottom: 8 }}
      renderSend={renderSend}
      renderBubble={renderBubble}
      renderLoading={() => renderLoading(colors)}
      renderComposer={(props) => renderComposer({ props, colors })}
      renderInputToolbar={(props) => renderInputToolbar({ props, colors })}
      renderSystemMessage={(props) => renderSystemMessage({ props, colors })}
      scrollToBottomComponent={() => scrollToBottomComponent(colors)}
      renderActions={renderActions}
    />
  );
}
