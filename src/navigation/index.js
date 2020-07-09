import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { AuthProvider } from '../contexts/AuthContext';
import RootNavigator from './RootNavigator';

export default function Providers() {
  return (
    <PaperProvider>
      <AuthProvider>
        <RootNavigator />
      </AuthProvider>
    </PaperProvider>
  );
}
