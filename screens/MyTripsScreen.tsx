import React from 'react';
import { ScrollView, View } from 'react-native';
import TripCard from '../components/TripCard';

export default function MyTripsScreen() {
  const tripsData = [
    {
      weight: '4.00 Kg',
      startLocation: 'Kakinada, AP, India',
      endLocation: 'Nellore, AP, India',
      earnings: '₹ 796/-',
      pickupTime: '5:30 PM Tue Dec 31',
      deliveryTime: '12:00 AM Wed Jan 1',
      request: true,
    },
  ];

  return (
    <ScrollView>
      {tripsData.map((trip, index) => (
        <View key={index} style={{ padding: 16 }}>
          <TripCard {...trip} />
        </View>
      ))}
    </ScrollView>
  );
}
