import React, { useContext } from 'react';
import { View, FlatList } from 'react-native';
import { TouchableOpacity} from 'react-native-gesture-handler';
import { List, Divider } from 'react-native-paper';
import { useTranslation } from 'react-i18next';
import { LanguageContext } from '../../context/LanguageContext';
import { styles } from './styles';
import { COLOR_PRIMARY } from '../../constants/Colors';

const languages = [
  { code: 'en', label: 'english' },
  { code: 'fr', label: 'french' },
  { code: 'es', label: 'spanish' },
];

export const Language = () => {
  const { selectedLanguage, handleSelectLanguage } = useContext(LanguageContext);
  const { t } = useTranslation();

  const renderItem = ({ item }) => {
    return (
      <View>
        <TouchableOpacity onPress={() => handleSelectLanguage(item.code)}>
          <List.Item
            title={t(`languageScreen.${item.label}`)}
            right={(props) =>
              selectedLanguage === item.code ? (
                <List.Icon {...props} icon='check' color={COLOR_PRIMARY} />
              ): null}
            titleStyle={selectedLanguage === item.code ? styles.selectedText : styles.text}
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
