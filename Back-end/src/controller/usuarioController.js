import { buscarPorId, listar, remover, salvar, alterar  } from "../repository/usuarioRepository.js";


import { Router } from "express";

const endpoints = Router();


endpoints.post('/usuario', async (req, resp) => {
  try {
    let usuario = req.body;

    if (!usuario.email)
      throw new Error('Email do Usuario é obrigatório!');

    if(usuario.email.length>70)
      throw new Error('Email muito longo');

    if (!usuario.senha)
      throw new Error('Senha do Usuario é obrigatório');

    if(usuario.senha.length>70)
      throw new Error('Senha muito longa');

   

    let r = await salvar(usuario);

    resp.send(r);
  }
  catch (err) {
    resp.status(400).send({
      erro: err.message
    })
  }
});

endpoints.put('/usuario/:id', async (req, resp) => {
  try {
    let usuario = req.body;
    let id = req.params.id;

      if (!usuario.email)
      throw new Error('Email do Usuario é obrigatório!');

      if(usuario.email.length>70)
      throw new Error('Email muito longo');

      if (!usuario.senha)
      throw new Error('Senha do Usuario é obrigatório');

      if(usuario.senha.length>70)
      throw new Error('Senha muito longa');

    // outras validações

    let r = await alterar(id,usuario);

    resp.send(r);
  }
  catch (err) {
    resp.status(400).send({
      erro: err.message
    })
  }
});


endpoints.get('/usuario', async (req, resp) => {
  try {
    let r = await listar();
    resp.send(r);
  }
  catch (err) {
    resp.status(400).send({
      erro: err.message
    })
  }
});




endpoints.get('/usuario/:id', async (req, resp) => {
  try {
    let id = req.params.id;
    let r = await buscarPorId(id);
    resp.send(r);
  }
  catch (err) {
    resp.status(400).send({
      erro: err.message
    })
  }
})



endpoints.delete('/usuario/:id', async (req, resp) => {
  try {
    let id = req.params.id;
    let linhasAfetadas = await remover(id);
    
    if (linhasAfetadas == 0)
      throw new Error('Usuario não encontrado!');

    resp.send();
  }
  catch (err) {
    resp.status(400).send({
      erro: err.message
    })
  }
})

export default endpoints;


