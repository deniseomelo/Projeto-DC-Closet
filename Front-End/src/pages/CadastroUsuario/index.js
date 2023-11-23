import { Link } from 'react-router-dom';
import './index.scss';
import { useState,useEffect } from 'react';
import axios from 'axios';


export default function CadastroUsuario(){

    const [email, setEmail]= useState("")
    const [senha, setSenha]=useState("")
    const [listaUsuarios, setListaUsuarios] = useState([]);

    async function salvarUsuario() {
        if (!email || !senha) {
            alert(' Insira seu email ou senha.');
        } else {
            const emailExistente = listaUsuarios.some(usuario => usuario.email === email);
    
            if (emailExistente) {
                alert('Email de usuário ja existe. Insira outro email.');
            } else {
                let body = {
                    email: email,
                    senha: senha
                }
    
                const response = await axios.post('http://4.201.80.48:5000/usuario', body);
                const id = response.data.id;
    
                alert("Usuário cadastrado. Id: " + id);
    
                window.location.href = `/Login`;
            }
        }
    }  
    async function buscarUsuario() {
        let r = await axios.get('http://4.201.80.48:5000/usuario');
        let usuarios = r.data;
    
        setListaUsuarios(usuarios);

    }

        useEffect(() => {
        
        buscarUsuario();
        console.log(listaUsuarios)

        }, [])


return(
    <section className='pagina-cadastro-usuario'>
      <img src="./assets/images/logo.png" alt="logo" />

      <form className="formUsuario">
        <h1>Cadastro de Usuário</h1>
        <label >E-mail</label>
        <input
          type="email"
          value={email}
          placeholder="Digite seu e-mail"
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Senha</label>
        <input
          type="password"
          value={senha}
          placeholder="Digite sua senha"
          onChange={(e) => setSenha(e.target.value)}
        />

        <button className="btn-Usuario" onClick={salvarUsuario}>
          Cadastrar
        </button>

        <Link to='/Login' className="link-voltar">
          Não Possui Uma Conta? Cadastre-se
        </Link>
      </form>
    </section>
  );
}
