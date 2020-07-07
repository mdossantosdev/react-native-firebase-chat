import React from 'react';
import { View } from 'react-native';
import { Bubble, Send } from 'react-native-gifted-chat';
import { IconButton } from 'react-native-paper';

export const renderBubble = (props) => {
  return (
    <Bubble
      {...props}
      wrapperStyle={{
        left: {
          backgroundColor: '#2d3436',
        },
        right: {
          backgroundColor: '#6646ee',
        },
      }}
      textStyle={{
        right: {
          color: '#ffffff',
        },
        left: {
          color: '#ffffff',
        },
      }}
    />
  );
};

export const renderSend = (props) => {
  return (
    <Send
      {...props}
      disabled={!props.text}
      containerStyle={{
        width: 44,
        height: 44,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 4,
      }}
    >
      <IconButton icon='send-circle' size={32} color='#6646ee' />
    </Send>
  );
};

export const scrollToBottomComponent = () => {
  return (
    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
      <IconButton icon='chevron-down' size={34} color='#6646ee' />
    </View>
  );
};