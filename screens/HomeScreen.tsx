import React, {useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-paper';

import ImagePickerComponent from "../components/ImagePicker";

const handleImageSelect = (uri: string) => {
  alert(uri)
};

export default function HomeScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Shipping Dost App!</Text>
      <Button mode="contained" style={styles.button} onPress={() => {
        setModalVisible(true);
      }}>
        <Text>
        Start Your Delivery
        </Text>
      </Button>
      <ImagePickerComponent onSelectImage={handleImageSelect} modalVisible={modalVisible} setModalVisible={setModalVisible}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  button: {
    marginTop: 16,
    backgroundColor: '#003B73',
  },
});
