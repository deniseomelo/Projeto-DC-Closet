# Projeto DC-Closet

Projeto criado na aula de Desenvolvimento web, e-commerce de loja de roupas. 

## Índice

- [Sobre](#sobre)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Funcionalidades](#funcionalidades)
- [Instalação](#instalação)
- [Como Usar](#como-usar)
- [Exemplo de Código](#exemplo-de-código)


## Sobre

Este projeto foi desenvolvido como parte da disciplina de Desenvolvimento Web no curso de Tecnologia em Análise e Desenvolvimento de Sistemas no SENAC. O objetivo é criar uma aplicação web funcional que demonstre o uso das tecnologias e práticas aprendidas ao longo do curso.

## Tecnologias Utilizadas

- HTML5
- CSS3
- Saas
- JavaScript
- Node.js
- Express.js
- MySQL 

## Funcionalidades

- Cadastro de usuários
- Login/Logout
- Criação, leitura, atualização e exclusão de dados (CRUD)
- Responsividade para diferentes dispositivos

## Instalação

Passos para instalar e configurar o projeto localmente:

1. Clone o repositório:
    ```bash
    git clone https://github.com/usuario/nome-do-projeto.git
    ```
2. Navegue até o diretório do projeto:
    ```bash
    cd nome-do-projeto
    ```
3. Instale as dependências:
    ```bash
    npm install
    ```
4. Configure as variáveis de ambiente, criando um arquivo `.env` na raiz do projeto com as seguintes informações:
    ```env
    PORT=5000
    MySQL_URI=sua_uri_do_mySql
    SECRET_KEY=sua_chave_secreta
    ```

## Como Usar

Instruções sobre como executar o projeto e acessar suas funcionalidades:

1. Inicie o servidor de desenvolvimento:
    ```bash
    npm start
    ```
2. Abra o navegador e acesse:
    ```
    http://localhost:5000
    ```

## Exemplo de Código

Aqui está um exemplo de como uma rota para criar um novo usuário pode ser implementada usando Express.js:

```javascript
const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Rota para criar um novo usuário
router.post('/register', async (req, res) => {
    const { username, password } = req.body;
    
    try {
        const newUser = new User({ username, password });
        await newUser.save();
        res.status(201).json({ message: 'Usuário criado com sucesso!' });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar usuário.' });
    }
});

module.exports = router;

