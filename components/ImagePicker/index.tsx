import React from "react";
import {
  View,
  Modal,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

export default function ImagePickerComponent({modalVisible,  onSelectImage, setModalVisible}) {
  const handleImageUpload = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });
    if (!result.canceled) {
      onSelectImage(result.assets[0].uri);
    }
    setModalVisible(false);
  };

  const handleImageCapture = async () => {
    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });
    if (!result.canceled) {
      onSelectImage(result.assets[0].uri);

    }
    setModalVisible(false);
  };

  return (
      <Modal
        transparent
        visible={modalVisible}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <TouchableOpacity style={styles.swipeBar}
              onPress={() => setModalVisible(false)}
            />
            <View style={styles.optionsContainer}>
              <View style={styles.iconContainer}>
                <TouchableOpacity
                  style={styles.optionButton}
                  onPress={handleImageUpload}
                >
                  <Ionicons name="cloud-upload-outline" size={20} color="#FFFFFF" />
                </TouchableOpacity>
                <Text style={styles.optionText}>Upload Photo</Text>
              </View>
              <View style={styles.iconContainer}>
                <TouchableOpacity
                  style={styles.optionButton}
                  onPress={handleImageCapture}
                >
                  <Ionicons name="camera-outline" size={20} color="#FFFFFF" />
                </TouchableOpacity>
                <Text style={styles.optionText}>Capture Photo</Text>
              </View>
            </View>
          </View>
        </View>
      </Modal>
  );
}

const styles = StyleSheet.create({
  openModalButton: {
    backgroundColor: "#007AFF",
    padding: 10,
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "flex-end",
  },
  modalContainer: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  swipeBar: {
    width: 86,
    height: 7,
    backgroundColor: "#101F31E5",
    borderRadius: 10,
    marginVertical: 8,
    alignSelf: 'center'
  },
  optionButton: {
    alignItems: "center",
    backgroundColor: "#101F31",
    padding: 16,
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    marginBottom: 5,
  },
  optionText: {
    fontSize: 16,
    color: "#000",
    alignSelf :'center'
  },
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 40
  },
  iconContainer: {
    alignItems: 'center'
  }
});
