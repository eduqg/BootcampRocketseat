# Live Monorepo

Não usar com create-react-app

```console
yarn init -y
```

Criar estrutura de pastas

```console
mkdir clients server

mkdir clients/user clients/admin
```

Alterar package.json

> private: true = variável para indicar que esse pacote não pode ser upado para o npm.

Comandos a serem utilizados

```console
yarn workspaces @client/user add meupacote
```

```console
yarn workspace @clients/user add react react-dom @rocketseat/rocket-scripts @hot-loader/react-dom
```

hot-loader não configurado nesse repositorio.


Para rodar client

```console
cd clients/user
yarn start
```