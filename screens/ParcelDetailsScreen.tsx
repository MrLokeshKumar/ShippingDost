import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ParcelDetailsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Parcel Details</Text>
      <Text>Weight: 4.00 Kg</Text>
      <Text>From: Kakinada, AP</Text>
      <Text>To: Nellore, AP</Text>
      <Text>Earnings: ₹ 796/-</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});
