import React, { useState, useEffect } from 'react';
import { StyleSheet, View, FlatList, TouchableOpacity } from 'react-native';
import { List, Divider } from 'react-native-paper';
import Loading from '../components/Loading';
import { firestore } from '../config/firebase';
import { useStatusBar } from '../hooks/useStatusBar';

export default function HomeScreen({ navigation }) {
  useStatusBar('light-content');

  const [rooms, setRooms] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = firestore
      .collection('ROOMS')
      .orderBy('latestMessage.createdAt', 'desc')
      .onSnapshot((querySnapshot) => {
        const rooms = querySnapshot.docs.map((documentSnapshot) => {
          return {
            _id: documentSnapshot.id,
            name: '',
            latestMessage: {
              text: '',
            },
            ...documentSnapshot.data(),
          };
        });

        setRooms(rooms);

        if (isLoading) setIsLoading(false);
      });

    return () => unsubscribe();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('Room', { room: item })}
    >
      <List.Item
        title={item.name}
        description={item.latestMessage.text}
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
        data={rooms}
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
  },
  listTitle: {
    fontSize: 18,
  },
  listDescription: {
    fontSize: 14,
  },
});
