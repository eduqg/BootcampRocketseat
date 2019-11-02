import React from 'react';
import { StatusBar } from 'react-native';

// import './config/ReactotronConfig';
import Routes from './routes';

export default function App({navigation}) {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#333" />
      <Routes />
    </>
  );
}
