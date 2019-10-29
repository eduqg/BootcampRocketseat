## RocketShoes

### Projeto utilizando redux

### Comandos de Desenvolvimento

Para inicializar o projeto.
> yarn create react-app modulo7redux-rocketshoes


Para adicionar bibliotecas do Prettier e ESLint
> yarn add prettier eslint-config-prettier eslint-plugin-prettier babel-eslint -D


Para configurar eslint
> yarn eslint --init

Criar arquivo .editorconfig com extensão  Editor config.

Adicionar depoendencias de estilos, rotas e prop-types.

> yarn add styled-components react-router-dom prop-types

Para adicionar fonte, ir em google fonts. Selecionar embeded. @import. copiar url e adicionar no global style.

Biblioteca que lida com cores dentro do javascript.
> yarn add polished

JSON Server!
Cria uma API fake para utilizarmos.
> yarn global add json-server
Usei sudo yarn global add json-server

json-server server.json -p 3333
Colocar -w caso formos alterar o json enquanto usamos.

Rotas disponíveis:

localhost:3333/products
localhost:3333/stock
localhost:3333/products/4

Ou, adicionando nos script para rodar com yarn json-server.
> yarn add json-server -D

Para requisições.
> yarn add axios

Bibliotecas para utilizar redux
> yarn add redux react-redux

Reactotron para debugar redux
> yarn add reactotron-react-js reactotron-redux

Immer: intermediário que faz rascunho antes de alterar o estado da store
Não fere a imutabilidade do react
> yarn add immer

Redux-saga serve para criar middlewares de ações. Em um cenário: ao adicionar um produto no carrinho preciso fazer requisição de mais dados na api sobre o meu produto.
> yarn add redux-saga

Para debugar redux-saga
> yarn add reactotron-redux-saga

Toasts no react
> yarn add react-toastify
