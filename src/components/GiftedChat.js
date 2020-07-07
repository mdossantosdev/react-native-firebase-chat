import React from 'react';
import { Bubble } from 'react-native-gifted-chat';

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
