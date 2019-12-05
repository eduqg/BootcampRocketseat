import React, { useEffect, useState } from 'react';
// PanResponder monitora gestos do usuário
import { View, Text, Animated, StyleSheet, PanResponder } from 'react-native';

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
  const [ball] = useState(new Animated.ValueXY({ x: 0, y: 0 }));
  // PanResponder pode ser utilizado para arrastar, dar zoom
  const panResponder = new PanResponder.create({
    onMoveShouldSetPanResponder: (e, gestureState) => {
      // if (gestureState.dx > 100) {
      //   return false;
      // }
      return true;
    },
    onPanResponderGrant: (e, gestureState) => {
      // Salva local depois da primeira interação do usuário
      ball.setOffset({
        x: ball.x._value,
        y: ball.y._value,
      });
    },
    onPanResponderMove: Animated.event(
      [
        null,
        {
          dx: ball.x,
          dy: ball.y,
        },
      ],
      {
        listener: (e, gestureState) => {
          // Guarda onde o usuário moveu o elemento, posso fazer outras ações
          console.log(gestureState);
        },
      }
    ),
    onPanResponderRelease: () => {
      // Reseta offset pois ele buga apos alguns interações
      ball.flattenOffset();
    },
  });

  // timing = animação linear. duration: 3000,
  // sprint = mesmo que linear, mas efeito elastico. Ao final ele quica. bounciness: 20,
  // decay = joga objeto para cima ou para beixo.
  useEffect(() => { }, []); // eslint-disable-line

  return (
    <View style={styles.container}>
      <Animated.View
        {...panResponder.panHandlers}
        style={[
          styles.ball,
          {
            transform: [{ translateX: ball.x }, { translateY: ball.y }],
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
