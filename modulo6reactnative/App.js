import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#ff00ff',
  },
  footer: {
    color: '#000',
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default function App() {
  return (
    <>
      <View style={styles.body}>
        <Text style={styles.footer}>Engine: Hermes</Text>
        <Text style={styles.footer}>Engine: Hermes</Text>
      </View>
    </>
  );
}
