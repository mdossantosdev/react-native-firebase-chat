import React, { useState, useContext, useEffect } from 'react';
import { GiftedChat } from 'react-native-gifted-chat';
import {
  renderBubble,
  renderSend,
  scrollToBottomComponent,
  renderLoading,
} from '../components/GiftedChat';
import { AuthContext } from '../contexts/AuthContext';
import { sendMessage } from '../api/firebaseAPI';

export default function RoomScreen({ route }) {
  const [messages, setMessages] = useState([]);
  const { thread } = route.params;
  const { user } = useContext(AuthContext);
  const currentUser = user.toJSON();

  useEffect(() => {
    console.log({ user });
  }, []);

  const handleSend = (messages) => {
    const text = messages[0].text;

    sendMessage(thread, currentUser, text);
  };

  return (
    <GiftedChat
      messages={messages}
      onSend={handleSend}
      user={{ _id: 1, name: 'User Test' }}
      placeholder='New Message'
      alwaysShowSend
      scrollToBottom
      renderBubble={renderBubble}
      renderSend={renderSend}
      scrollToBottomComponent={scrollToBottomComponent}
      renderLoading={renderLoading}
    />
  );
}
