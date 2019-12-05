import React, { useEffect, useState } from 'react';
import { View, Text, Animated, StyleSheet } from 'react-native';

// Animated exporta

// Animated.View
// Animated.Text
// Animated.Image
// Animated.ScrollView

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    backgroundColor: 'darkblue',
  },
  ball: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: 'white',
  },
});

export default function App() {
  const [ballY] = useState(new Animated.Value(0));
  // Posso usar add, multiplay, subtract, modulo também
  const [ballX] = useState(Animated.multiply(ballY, 0.3));

  // timing = animação linear. duration: 3000,
  // sprint = mesmo que linear, mas efeito elastico. Ao final ele quica. bounciness: 20,
  // decay = joga objeto para cima ou para beixo.
  useEffect(() => {
    Animated.decay(ballY, {
      velocity: 0.5,
      // toValue: 500,
      // duration: 3000,
      // bounciness: 20,
    }).start();
  }, []); // eslint-disable-line

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.ball, { top: ballY, left: ballX }]} />
      <Text>Olá</Text>
    </View>
  );
}
