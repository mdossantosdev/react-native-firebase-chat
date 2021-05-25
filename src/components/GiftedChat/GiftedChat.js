import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { IconButton } from 'react-native-paper';
import {
  Bubble,
  Send,
  SystemMessage,
  InputToolbar,
  Composer,
  Actions,
} from 'react-native-gifted-chat';

import {
  COLOR_PRIMARY,
  DARK_COLOR_PRIMARY,
  COLOR_WHITE_TEXT,
} from '../../constants/Colors';

export const renderBubble = (props) => {
  return (
    <Bubble
      {...props}
      wrapperStyle={{
        left: {
          backgroundColor: DARK_COLOR_PRIMARY,
        },
        right: {
          backgroundColor: COLOR_PRIMARY,
        },
      }}
      textStyle={{
        left: {
          color: COLOR_WHITE_TEXT,
        },
        right: {
          color: COLOR_WHITE_TEXT,
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
        opacity: 0.6,
        borderRadius: 10,
        padding: 4,
      }}
      textStyle={{ color: COLOR_WHITE_TEXT, fontSize: 12, fontWeight: '500' }}
    />
  );
};

export const renderInputToolbar = ({ props, colors }) => (
  <InputToolbar
    {...props}
    containerStyle={{
      backgroundColor: colors.inputToolbarColor,
      borderTopWidth: 0,
    }}
    primaryStyle={{ alignItems: 'center' }}
  />
);

export const renderComposer = ({ props, colors }) => (
  <Composer
    {...props}
    textInputStyle={{
      backgroundColor: colors.composerBackgroundColor,
      color: colors.composerTextColor,
      borderWidth: 0,
      borderRadius: 15,
      paddingTop: 8.5,
      paddingHorizontal: 10,
      marginLeft: 0,
    }}
  />
);

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
      }}
    >
      <IconButton icon='send' size={30} color={COLOR_PRIMARY} />
    </Send>
  );
};

export const renderActions = (props) => (
  <Actions
    {...props}
    containerStyle={{
      width: 44,
      height: 44,
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: 0,
      marginBottom: 0,
    }}
    icon={() => <IconButton icon='paperclip' size={30} color={COLOR_PRIMARY} />}
    options={{
      'Choose From Library': () => {
        console.log('Choose From Library');
      },
      'Send Location': () => {
        console.log('Send Location');
      },
      Cancel: () => {
        console.log('Cancel');
      },
    }}
    optionTintColor={COLOR_PRIMARY}
  />
);
