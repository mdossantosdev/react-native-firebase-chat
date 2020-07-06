import React, { useState, useEffect } from 'react';
import { StyleSheet, View, FlatList, TouchableOpacity } from 'react-native';
import { List, Divider } from 'react-native-paper';
import Loading from '../components/Loading';
import { firebase } from '../config/firebase';

export default function HomeScreen({ navigation }) {
  const [threads, setThreads] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = firebase
      .firestore()
      .collection('THREADS')
      .onSnapshot((querySnapshot) => {
        const threads = querySnapshot.docs.map((documentSnapshot) => {
          return {
            _id: documentSnapshot.id,
            name: '',
            ...documentSnapshot.data(),
          };
        });

        setThreads(threads);

        if (isLoading) setIsLoading(false);
      });

    return () => unsubscribe();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('Room', { thread: item })}
    >
      <List.Item
        title={item.name}
        description='Item description'
        titleNumberOfLines={1}
        titleStyle={styles.listTitle}
        descriptionStyle={styles.listDescription}
        descriptionNumberOfLines={1}
      />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={threads}
        renderItem={renderItem}
        keyExtractor={(item) => item._id}
        ItemSeparatorComponent={() => <Divider />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  listTitle: {
    fontSize: 18,
  },
  listDescription: {
    fontSize: 14,
  },
});
