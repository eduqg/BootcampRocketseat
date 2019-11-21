# Deploy Backend node na Digital Ocean

## Criação de Servidor

Entrar na Digital Ocean.

Criar Droplet.

Ir em Marketplace e selecionar container com docker e docker-compose.

Selecionar plano mais barato.

Selecionar Nova York ou São Francisco.

### Criar chave ssh.

Em um terminal, identificar minha máquina:

```console
ssh-keygen
```

O arquivo estará na pasta do ~/.ssh

id_rsa.pub = chave pública

Copiar conteúdo da chave:

```console
car ~/.ssh/id_rsa.pub
```

Copiar conteúdo da chave pública para a Digital Ocean e colocar um nome como Notebook 1. Seleciona-lo na Digital Ocean.

Criar nome do droplet: deploy-bootcamp

Criar Droplet.

## Configurando Servidor

Copiar ipv4.

Acessar com:

```console
ssh root@165.22.xx.xxx
```

Are you sure to continue connecting: yes.

Assim que iniciar:

```console
apt update
apt upgrade
```

Para fazer alterações dentro da máquina, criar novo usuário:

```console
adduser deploy
```

Dar poderes de administrador:

```console
usermod -aG sudo deploy
```

Permitir acesso a esse usuário direto com ssh, para não precisar ir primeiro no root para depois acessar usuário.

```console
mkdir /home/deploy/.ssh
cp ~/.ssh/authorized_keys /home/deploy/.ssh/
```
Ir ao arquivo. Trocar dono do arquivo authorized_keys para deploy.

```console
chown deploy:deploy authorized_keys
```

Para testar, sair e entrar com novo usuário.

```console
exit
ssh deploy@165.22.xx.xxx
```

Instalar node. Ir ao site. Other downloads, Installing Node.js via package manager. Selecionar Ubuntu. Ir no repositório https://github.com/nodesource/distributions/blob/master/README.md e escolher versão LTS. Instalar com o novo usuário.

## Clonando repositório

Dentro da máquina, clonar a aplicação e instalar dependências:

```console
git clone github.com/meuapp meuapp
cd meuapp
npm install
```

E copiar .env-example para .env

```console
cp .env.example .env
```
## Criando Serviços 

Adicione variáveis em .env

Adicionar docker sem sudo na máquina.

docker run --name postgres -e POSTGRES_PASSWORD=senhadeploy -p 5432:5432 -d -t postgres

Adiconar em .env variáveis.

Entrar no bash do container.

```console
docker exec -i -t postgres /bin/sh
```

Mudar para usuário postgres:

```console
psql

psql: error: could not connect to server: FATAL:  role "root" does not exist

su postgres

# psql
# \dt
```

Criar database, que também foi definido com o nome em .env:

```console
CREATE DATABASE mydatabasename;

\q

exit

exit
```

## Rodando Servidor

Abrir packagem.json com vim. Criar comandos pelo repositório e dar push:

O comando build gera um executábel, uma build. Aponto onde está o código ./src, onde irá gerar a build ./dist (para indicar distribuição, escolha pessoal), imports pois estou utilizando import/export ao invés de require.

```console
    "build": "sucrase ./src -d ./dist --transforms imports",
    "start": "node dist/server.js"
```

A máquina padrão vem configurada com firewall. Habilitar acesso na porta 3333

```console
sudo ufw allow 3333
```

Rodar migrações

```console
npx sequelize db:migrate
```

Commitar alterações e voltar para máquina.

```console
npm run build
```

Para testar, copiar ip do servidor, colocar no lugar de localhost das variáveis de ambiente do insomnia.

## Dicas do SSH

Se precisar parar o servidor:

Para descobrir todos os processos que rodam na porta: 

```console
lsof -i :3333
```
Pegar PID do processo. E terminar o processo:

```console
kill -9 123123
```

Para que conexão do ssh não caia em 30 segundos de inatividade. [link](https://www.digitalocean.com/community/questions/keep-my-ssh-session-alive)


```console
sudo vim /etc/ssh/sshd_config
```

Colocar 3 configurações, verificar primeiro se configurações não estão no documento.

```console
ClientAliveInterval 30
TCPKeepAlive yes
ClientAliveCountMax 99999
```

Reiniciar sshd:

```console
sudo service sshd restart
exit
ssh deploy@165.22.xx.xxx
```

## Configurar NGINX

NGINX: ferramenta de proxy reverso, faz redirecionamento de portas.

Se possuir mais de um subdomínio no meu servidor, preciso redirecionar portas.

Se chamar um endereço utilizando subdomnío A, quero chamal aplicação B node, que está na porta 3334.  

Configurar da porta 3333 para porta 80:

```console
sudo apt install nginx
```

Acessando pelo navegador meu ip da máquina, fica carregando indefinidamente.

Liberar porta 80

```console
sudo ufw allow 80
```

Abrir novamente ip da máquina, que estará com a tela do nginx. Esse endereço com nenhuma porta acessa a porta 80. Por isso é necessário redirecionar para a 3333.


```console
sudo vim /etc/nginx/sites-available/default 
```

Editar para:

```console
  server {
    listen 80 default_server;
    listen [::]:80 default_server;

    server_name _;

    location / {
      proxy_pass http://localhost:3333;
      proxy_http_version 1.1;
      proxy_set_header Upgrade $http_upgrade;
      proxy_set_header connection 'upgrade';
      proxy_set_header Host $host;
      proxy_cache_bypass $http_updgrade;
    }
  }
```

Reiniciar serviço do nginx.

```console
sudo service nginx restart
```

Verificar se alterações estão ok:

```console
sudo nginx -t
```

Entrar na pasta do projeto e iniciar aplicação.

```console
npm run start
```

Agora é possível acessar a aplicação sem porta.

#### Para domínio

Ir no Digital Ocean e acessar a aba Networking. Colocar domínio comprado e apontar dns's do domínio para o servidor do digital ocean. Configurar para que tal domínio reflita naquele servidor.

## Utilizando PM2

Para manter servidor rodando mesmo se fechar ou reiniciar.

```console
sudo npm install -g pm2
```

```console
pm2 start dist/server.js
```

Para mostrar lista de servidor rodando
```console
pm2 list
```

Para que servidor seja reiniciado com pm2 automaticamente:

```console
pm2 startup systemd
```

```console
sudo env PATH=$PATH:/usr/bin /usr/lib/node_modules/pm2/bin/pm2 startup systemd -u deploy --hp /home/deploy
```

Caso queira adicionar mais comandos ao pm2, executar pm2 save.
Para remover script que reinicia pm2 unstartup systemd

Para monitorar logs de servidor:

```console
pm2 monit
```

## Integração contíua

Com buddy -> para github
