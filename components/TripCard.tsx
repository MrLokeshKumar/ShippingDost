import React from 'react';
import { View, Text } from 'react-native';
import { Card, Button, Divider, useTheme } from 'react-native-paper';

interface TripProps {
  weight: string;
  startLocation: string;
  endLocation: string;
  earnings: string;
  pickupTime: string;
  deliveryTime: string;
  request: boolean;
}

export default function TripCard(props: TripProps) {
  const theme = useTheme();

  return (
    <Card style={{ borderRadius: 8 }}>
      <Card.Content>
        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{props.weight}</Text>
        <Text>From: {props.startLocation}</Text>
        <Text>To: {props.endLocation}</Text>
        <Divider />
        <Text>Pickup: {props.pickupTime}</Text>
        <Text>Delivery: {props.deliveryTime}</Text>
        <Text style={{ color: theme.colors.primary }}>Earnings: {props.earnings}</Text>
        {props.request && (
          <Text style={{ color: 'blue', marginTop: 4 }}>A sender requested you to deliver this parcel</Text>
        )}
      </Card.Content>
      <Card.Actions>
        <Button mode="outlined">Edit</Button>
        <Button mode="contained">Find Parcels</Button>
      </Card.Actions>
    </Card>
  );
}
