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
