import React, { useContext } from 'react';
import { View, FlatList } from 'react-native';
import { TouchableOpacity} from 'react-native-gesture-handler';
import { List, Divider } from 'react-native-paper';
import { LanguageContext } from '../../context/LanguageContext';
import { styles } from './styles';

const languages = [
  { name: 'English' },
  { name: 'French' },
  { name: 'Spanish' },
];

export const Language = () => {
  const { selectedLanguage, handleSelectLanguage } = useContext(LanguageContext);

  const renderItem = ({ item }) => {
    return (
      <View>
        <TouchableOpacity onPress={() => handleSelectLanguage(item.name)}>
          <List.Item
            title={item.name}
            right={(props) => selectedLanguage === item.name ? <List.Icon {...props} icon='check' /> : null}
          />
        </TouchableOpacity>
        <Divider />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={languages}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};
