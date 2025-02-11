import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Text, TextInput, Button, Snackbar } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";

// Define types for navigation
interface RootStackParamList {
  TabNavigator: undefined;
}

type LoginScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "TabNavigator"
>;

const LoginScreen: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [mobileNumber, setMobileNumber] = useState<string>("");
  const [errorVisible, setErrorVisible] = useState<boolean>(false);
  const navigation = useNavigation<LoginScreenNavigationProp>();

  // Dummy credentials
  const validEmail = "a";
  const validMobileNumber = "1";

  const handleLogin = () => {
    if (email === validEmail && mobileNumber === validMobileNumber) {
      navigation.replace("TabNavigator");
    } else {
      setErrorVisible(true);
    }
  };

  return (
    <View style={styles.container}>
      <Text variant="headlineLarge" style={styles.title}>
        Login
      </Text>

      <TextInput
        label="Email"
        mode="outlined"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        label="Mobile Number"
        mode="outlined"
        value={mobileNumber}
        onChangeText={setMobileNumber}
        style={styles.input}
        keyboardType="phone-pad"
      />

      <Button mode="contained" onPress={handleLogin} style={styles.button}>
        Login
      </Button>

      <Snackbar
        visible={errorVisible}
        onDismiss={() => setErrorVisible(false)}
        duration={3000}
      >
        Invalid credentials. Please check your email or mobile number.
      </Snackbar>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
    backgroundColor: "#f9f9f9",
  },
  title: {
    textAlign: "center",
    marginBottom: 32,
  },
  input: {
    marginBottom: 16,
  },
  button: {
    marginTop: 8,
  },
});

export default LoginScreen;
