# Adonis API application

This is the boilerplate for creating an API server in AdonisJs, it comes pre-configured with.

1. Bodyparser
2. Authentication
3. CORS
4. Lucid ORM
5. Migrations and seeds

## Setup

Use the adonis command to install the blueprint

```bash
adonis new yardstick --api-only
```

or manually clone the repo and then run `npm install`.


### Migrations

Run the following command to run startup migrations.

```js
adonis migration:run
```

## Comandos utilizados

Instalar de forma global o adonis.

```console
sudo yarn global add @adonisjs/cli
```

Iniciar projeto

```console
adonis new gonodeadonis --api-only --yarn

```

* comando adonis para ver outras opcoes

Para rodar o servidor

```console
adonis serve --dev
```

Guia de estilo, vamos utilizar o standart, que é usado pelo adonis. Usar o stile guide do framework é mais indicado.

Sem ponto e vírgula no fim da linha. Espaço entre métodos e parenteses.

```console
yarn add eslint -D
yarn eslint --init
```

Editar globals no eslintrc.json para usar sintaxe use do adonis.
