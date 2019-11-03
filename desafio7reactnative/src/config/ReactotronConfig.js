import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
import sagaPlugin from 'reactotron-redux-saga';
import apisaucePlugin from 'reactotron-apisauce';
import { CURRENT_LOCAL_IP } from 'react-native-dotenv';

// Retorna true para ambiente de desenvolvimento
if (__DEV__) {
  const tron = Reactotron.configure({
    host: `${CURRENT_LOCAL_IP}`,
    port: 9090,
  })
    .use(reactotronRedux())
    .use(sagaPlugin())
    .use(apisaucePlugin())
    .useReactNative()
    .connect();

  // console.tron
  // eslint-disable-next-line no-console
  console.tron = tron;
  // Para limpar timeline cada vez que alterar
  tron.clear();
}
