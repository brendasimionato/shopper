# Cadastro de Pedido - Shopper API

## Introdução 

Esse projeto tem como objetivo ser uma aplicação back-end para prover os end-points necessários para listagem de produtos e cadastro de pedidos.

## Tecnologias

Node, Typescript, Express, MySQL, Knex

## Subir aplicação

Para subir a aplicação basta apenas executar os comandos abaixo, após realizar o clone do projeto:

### `npm install`
Instala as dependências do projeto

### `npm start`
Inicia a aplicação na porta definida no .env

## Obs
Por segurança e boa prática, não está versionado o .env onde possui os dados de configuração de banco de dados e porta do servidor. Entretanto, tem o .env.example para servir como base para ser preenchido caso deseje rodar a aplicação localmente.

Há também o arquivo tables.sql na raiz da aplicação. Esse arquivo possui a estrutura das tabelas que foram utilizadas para essa aplicação. Caso deseje, você pode criar essas tabelas em qualquer banco MySQL e depois configurar os dados do banco no arquivo .env para subir a aplicação.