import './index.scss';
import { Link, useNavigate,  } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';


export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [listaUsuario, setListaUsuario] = useState([]);

  const navigate = useNavigate();
 

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('http://191.234.194.31:5000/usuario');
        setListaUsuario(response.data);
      } catch (error) {
        console.error('Erro ao buscar usuários:', error);
      }
    }

    fetchData();
  }, []);

  function verificarUsuario() {
    if (!email || !senha) {
      alert("Email ou senha vazios.");
    } else {
      const usuario = listaUsuario.find(user => user.email === email && user.senha === senha);

      if (usuario) {
        navigate(`/menu`);
      } else {
        alert("Email ou senha inválidos");
      }
    }
  }

  return (
    <section className='pagina-Login'>
      <img src="./assets/images/logo.png" alt="logo" />

      <form className="formLogin">
        <h1>Login de Usuario</h1>
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

        <button className="btn-login" onClick={verificarUsuario}>
          Logar
        </button>
        <Link to='/Cadastro-Usuario' className="link-voltar">
          Já Possui uma Conta? Faça o Login
        </Link>
      </form>
    </section>
  );
}