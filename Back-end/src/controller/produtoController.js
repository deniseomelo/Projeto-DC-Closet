import { salvar, listar, BuscarPorDescricao, remover, alterar, BuscarPorCodigo } from "../repository/produtoRepository.js";

import { Router } from "express";
import multer from 'multer';

const endpoints = Router();


const upload = multer({dest: './storage'});

endpoints.post('/produto', async (req, resp) => {
    try {
       let produto = req.body;
       let r = await salvar(produto);

       resp.send(r);
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
});


endpoints.get('/produto', async (req, resp) => {
    try{
        let r = await listar();
        resp.send(r);
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
});

endpoints.get('/produto/busca', async (req, resp) => {
    try{
        let descricao = req.query.descricao;
        let r = await BuscarPorDescricao(descricao);
        resp.send(r);
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
});


endpoints.get('/produto/:codigo', async (req, resp) => {
    try{
        let codigo = req.params.codigo;
        let r = await BuscarPorCodigo(codigo);
        resp.send(r);
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
});


endpoints.put('/produto/:codigo', async (req, resp) => {
    try {
        const codigo = req.params.codigo; 
        const produto = req.body; 

        const resultado = await alterar(codigo, produto);

        resp.send({ mensagem: resultado });
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        });
    }
});

endpoints.put('/produto/:codigo/capa', (req, resp, next) => {
    upload.single('capa')(req, resp, (err) => {
      if (err) {
        console.error(err); // Logue o erro para debug
        return resp.status(500).send('Erro no upload de capa');
      }
      next();
    });
  }, async (req, resp) => {
    let codigo = req.params.codigo;
    let caminho = req.file.path;
  
    let r = await alterarCapa(codigo, caminho);
    resp.status(202).send();
  });

endpoints.delete('/produto/:codigo', async (req, resp) => {
    try{
        let codigo = req.params.codigo;
        let linhasAfetadas = await remover(codigo);

        resp.send();
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    } 
});



export default endpoints;

