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
  // Posso usar add, multiplay, subtract, modulo também
  const [ballY] = useState(new Animated.Value(0));

  // timing = animação linear. duration: 3000,
  // sprint = mesmo que linear, mas efeito elastico. Ao final ele quica. bounciness: 20,
  // decay = joga objeto para cima ou para beixo.
  useEffect(() => {
    Animated.timing(ballY, {
      toValue: 300,
      duration: 1000,
    }).start();
  }, []); // eslint-disable-line

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.ball,
          {
            top: ballY,
            opacity: ballY.interpolate({
              // Defino o meu range (está em toValue)
              inputRange: [0, 300],
              // Defino o quanto quero de opacidade em 0 e em 300
              outputRange: [1, 0.2],
              // quando chegar no valor 300, parar. Não alterar mais a opacidade.
              extrapolate: 'clamp',
            }),
          },
        ]}
      />
      <Text>Olá</Text>
    </View>
  );
}

// useEffect(() => {
//   Animated.loop(
//     // sequence = executa em sequencia
//     // parallel = executa em paralelo
//     // stagger = espera 100 milisegundos, executa então a segunda animação. Animated.stagger(200, [animações])
//     Animated.sequence([
//       Animated.timing(ballY, {
//         toValue: 200,
//         duration: 500,
//         // velocity: 0.5,
//         // bounciness: 20,
//       }),

//       Animated.delay(200),

//       Animated.timing(ballX, {
//         toValue: 200,
//         duration: 500,
//       }),

//     ]),
//     {
//       iterations: 2,
//     }
//   ).start();
// }, []); // eslint-disable-line
