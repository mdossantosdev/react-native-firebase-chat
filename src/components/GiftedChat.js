import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import {
  Bubble,
  Send,
  SystemMessage,
  InputToolbar,
  Composer,
} from 'react-native-gifted-chat';
import { IconButton } from 'react-native-paper';

export const renderBubble = ({ props, colors }) => {
  return (
    <Bubble
      {...props}
      wrapperStyle={{
        left: {
          backgroundColor: '#e6e9ef',
        },
        right: {
          backgroundColor: colors.primary,
        },
      }}
      textStyle={{
        left: {
          color: '#000000',
        },
        right: {
          color: '#ffffff',
        },
      }}
    />
  );
};

export const scrollToBottomComponent = (colors) => {
  return (
    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
      <IconButton icon='chevron-down' size={34} color={colors.primary} />
    </View>
  );
};

export const renderLoading = (colors) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ActivityIndicator size='large' color={colors.primary} />
    </View>
  );
};

export const renderSystemMessage = ({ props, colors }) => {
  return (
    <SystemMessage
      {...props}
      wrapperStyle={{
        backgroundColor: colors.primary,
        opacity: 0.9,
        borderRadius: 10,
        padding: 4,
      }}
      textStyle={{ color: '#ffffff', fontSize: 12, fontWeight: '500' }}
    />
  );
};

export const renderInputToolbar = (props) => (
  <InputToolbar
    {...props}
    containerStyle={{
      backgroundColor: '#e6e9ef',
      borderTopWidth: 0,
      paddingVertical: 5,
      paddingHorizontal: 2,
    }}
    primaryStyle={{ alignItems: 'center' }}
  />
);

export const renderComposer = (props) => (
  <Composer
    {...props}
    textInputStyle={{
      backgroundColor: '#ffffff',
      borderWidth: 0,
      borderRadius: 15,
      paddingTop: 8.5,
      paddingHorizontal: 10,
      marginLeft: 0,
    }}
  />
);

export const renderSend = ({ props, colors }) => {
  return (
    <Send
      {...props}
      disabled={!props.text}
      containerStyle={{
        width: 44,
        height: 44,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 3,
      }}
    >
      <IconButton icon='send-circle' size={32} color={colors.primary} />
    </Send>
  );
};
