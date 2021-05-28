import React, { useState, useContext, useEffect } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { GiftedChat } from 'react-native-gifted-chat';
import { useTheme } from 'react-native-paper';
import {
  renderLoading,
  renderSystemMessage,
  renderBubble,
  scrollToBottomComponent,
  renderInputToolbar,
  renderComposer,
  renderSend,
  renderActions,
} from '../../components/GiftedChat';
import { AuthContext } from '../../context/AuthContext';
import { useStatusBar } from '../../hooks/useStatusBar';
import { sendMessage, sendLatestMessage } from '../../api/firestoreAPI';
import {
  getLocationPermission,
  getCurrentLocation,
  formatCurrentLocation
} from '../../utils/location';
import { firestore } from '../../config/firebase';

export const Room = ({ route }) => {
  useStatusBar('light-content');

  const { room } = route.params;
  const { colors } = useTheme();
  const insets = useSafeAreaInsets();
  const { user } = useContext(AuthContext);
  const [messages, setMessages] = useState([]);

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
    const location = null;

    sendMessage(room, currentUser, text, location);
    sendLatestMessage(room, text);
  };

  const handleSendLocation = async () => {
    await getLocationPermission();
    const location = await getCurrentLocation();
    const address = await formatCurrentLocation(location);
    const text = address;

    sendMessage(room, currentUser, text, location);
    sendLatestMessage(room, text);
  };

  return (
    <GiftedChat
      messages={messages}
      onSend={handleSend}
      user={{ _id: currentUser.uid }}
      placeholder='Message'
      alwaysShowSend
      scrollToBottom
      alignTop
      renderSend={renderSend}
      renderBubble={renderBubble}
      renderLoading={() => renderLoading(colors)}
      renderComposer={(props) => renderComposer({ props, colors })}
      renderInputToolbar={(props) => renderInputToolbar({ props, colors })}
      renderSystemMessage={(props) => renderSystemMessage({ props, colors })}
      scrollToBottomComponent={() => scrollToBottomComponent(colors)}
      renderActions={(props) => renderActions({ props, handleSendLocation })}
      bottomOffset={insets.bottom}
      textInputProps={{
        keyboardAppearance: useTheme().dark ? 'dark' : 'light',
      }}
    />
  );
};
