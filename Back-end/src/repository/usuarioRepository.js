import { con } from "./connection.js";

export async function salvar(usuario) {
  const comando = `
      INSERT INTO usuario (email, senha)
                    VALUES (?, ?)
  `

  const [info] = await con.query(comando, [usuario.email, usuario.senha])
  usuario.id = info.insertId;
  
  return usuario;
}

export async function listar() {
  const comando = `
     SELECT Id      as Id,
            email        as email,
            senha      as senha
       FROM usuario
  `

  const [linhas] = await con.query(comando);
  return linhas;
}


export async function buscarPorId(id) {
  const comando = `
  SELECT id      as id,
            email       as email,
            senha      as senha
       FROM USUARIO
      WHERE id=?
  `

  const [linhas] = await con.query(comando, [id]);
  return linhas;
}


export async function alterar(id, usuario) {
  const comando=`  UPDATE USUARIO
                    SET
                    email = ?,
                    senha = ?
                    WHERE id = ?`

  const [linhas] = await con.query(comando, [usuario.email, usuario.senha,id])
  
  return usuario;

}


export async function remover(id) {
  const comando = 'DELETE FROM USUARIO WHERE id = ?'

  const [info] = await con.query(comando, [id])
  return info.affectedRows;
}