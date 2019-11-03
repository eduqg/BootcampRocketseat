## RocketShoes Mobile

### Projeto utilizando React Native, Redux e Redux Saga

### Comandos de Desenvolvimento

Inicialização.
> react-native init desafio7reactnative

Instalar ESLint
> yarn add eslint -D

> yarn eslint --init


Prettier
> yarn add prettier eslint-config-prettier eslint-plugin-prettier babel-eslint -D

Configurar arquivos editorconfig, eslintrc e prettier.

> yarn start

Ver [resolução de bug para emulador](https://github.com/facebook/react-native/issues/15388#issuecomment-505283697). No emulador colocar nas configurações localhost:9090. No terminal colocar:
> adb reverse tcp:9090 tcp:8081

> react-native run android

Para debug, navegação e estilização.
> yarn add reactotron-react-native react-navigation react-navigation-stack styled-components

> yarn add axios

Adicionar json-server!

> yarn add global json-server

Testando com o celular via wifi:

Pegue o ip da sua máquina com ifconfig | grep "inet " Deve parecer com 192.168.x.xx

Desabilitar o firewall do computador para que porta seja acessada pelo celular.

From: [Link](https://stackoverflow.com/questions/19332033/how-can-i-access-my-localhost-through-android-phone)
1. Retrieve your IP address:
In Ubuntu: type ifconfig in terminal
In Windows: type ipconfig in cmd`
2. Disable your Firewall
In Ubuntu: type sudo ufw disable in terminal
In Windows: Go to "Control Panel> System and Security> Windows Firewall" and turn it off.
3. Insert retrieved IP address into your phone browser.
(Your XAMPP local server must be running)
Well done!

Inicie o servidor.

> json-server server.json -p 3333 -H 192.168.0.14

-d 2000 = para ter delay de requisições

Para variáveis de ambiente .env [Link](https://levelup.gitconnected.com/how-to-gracefully-use-environment-variables-in-a-react-native-app-7f1600446116)
> yarn add react-native-dotenv
Em babel.config.js

module.exports = {
  presets: [
    'module:metro-react-native-babel-preset',
    'module:react-native-dotenv'
  ]
}

import { SOME_KEY } from 'react-native-dotenv'

Criar arquivo .env com a chave CURRENT_LOCAL_IP=198.162.xx.xx para funcionar esse projeto.

Redux e redux saga
> yarn add redux react-redux redux-saga reactotron-redux

Para criar drafts. Pego estado atual, realizo modificações em um rascunho e entãp aplico alterações no estado principal.
> yarn add immer
