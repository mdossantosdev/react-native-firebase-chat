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
import { LocationView } from '../LocationView';
import {
  COLOR_PRIMARY,
  COLOR_BUBBLE_LEFT,
  COLOR_BUBBLE_RIGHT,
  COLOR_WHITE_TEXT,
} from '../../constants/Colors';

export const renderBubble = (props) => {
  const { currentMessage } = props;

  if (currentMessage.location) return <LocationView location={currentMessage.location} />;

  return (
    <Bubble
      {...props}
      wrapperStyle={{
        left: {
          backgroundColor: COLOR_BUBBLE_LEFT,
        },
        right: {
          backgroundColor: COLOR_BUBBLE_RIGHT,
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
      timeTextStyle={{
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

export const scrollToBottomComponent = (colors) => (
  <View style={{ justifyContent: 'center', alignItems: 'center' }}>
    <IconButton icon='chevron-down' size={34} color={colors.primary} />
  </View>
);

export const renderLoading = (colors) => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <ActivityIndicator size='large' color={colors.primary} />
  </View>
);

export const renderSystemMessage = ({ props, colors, t }) => {
  const roomName = props.currentMessage.text;
  const text = `${t('roomScreen.systemMessage')} ${roomName}`;

  return (
    <SystemMessage
      {...props}
      currentMessage={{ text }}
      wrapperStyle={{
        backgroundColor: colors.primary,
        opacity: 0.6,
        borderRadius: 10,
        padding: 4,
      }}
      textStyle={{ color: COLOR_WHITE_TEXT, fontSize: 12, fontWeight: '500' }}
    />
  )
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

export const renderSend = (props) => (
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

export const renderActions = ({ props, handleSendLocation, t }) => (
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
      [t('roomScreen.chooseFromLibrary')]: () => console.log('Choose From Library'),
      [t('roomScreen.sendCurrentLocation')]: () => handleSendLocation(),
      [t('roomScreen.cancel')]: () => console.log('Cancel')
    }}
    optionTintColor={COLOR_PRIMARY}
  />
);
