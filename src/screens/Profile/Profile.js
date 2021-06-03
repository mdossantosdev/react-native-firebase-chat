import React, { useContext } from 'react';
import { View } from 'react-native';
import { Avatar, List, Text } from 'react-native-paper';
import { useTranslation } from 'react-i18next';
import { styles } from './styles';
import { AuthContext } from '../../context/AuthContext';
import { formatDate } from '../../utils/date';

export const Profile = () => {
  const { user } = useContext(AuthContext);
  const { t } = useTranslation();

  const joinedDate = formatDate(Number(user.metadata.a));

  return (
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        <Avatar.Text
          size={64}
          label={user.email[0].toUpperCase()}
          style={styles.avatar}
        />
      </View>
      <List.Item
        title={t('profileScreen.emailLabel')}
        description={user.email}
        left={(props) => <List.Icon {...props} icon='email' />}
      />
      <View style={styles.dateContainer}>
        <Text style={styles.date}>{t('profileScreen.joined')} {joinedDate}</Text>
      </View>
    </View>
  );
};
