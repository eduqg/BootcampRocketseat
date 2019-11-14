# Testes em ReactJS

## Comandos

Criado com

> yarn create react-app modulo12testesreact

___

Para conseguir fazer configurações de testes, é necessário instalar o rewired. Ele permite adicionar configurações no babel, webpack e jest.

> yarn add react-app-rewired -D

___

Lib para testar componentes no react (facilita montagem), adiciona funcionalidades para jest criar expectations baseados na DOM do html.

> yarn add @testing-library/react @testing-library/jest-dom -D

___

Para intellisense no jest:

> yarn add @types/jest -D

___

No package.json

```console
"setupFilesAfterEnv": [
  "@testing-library/react/cleanup-after-each", <- deprecated
  "@testing-library/jest-dom/extend-expect"
],
```
___

> yarn add jest-localstorage-mock -D

___

Para teste de redux. Mocks.

> yarn add redux react-redux
