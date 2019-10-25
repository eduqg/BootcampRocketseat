import Reactotron from 'reactotron-react-native';

// Retorna true para ambiente de desenvolvimento
if (__DEV__) {
  const tron = Reactotron.configure({host: 'localhost', port: 9090})
    .useReactNative()
    .connect();

  // console.tron
  // eslint-disable-next-line no-console
  console.tron = tron;
  // Para limpar timeline cada vez que alterar
  tron.clear();
}
