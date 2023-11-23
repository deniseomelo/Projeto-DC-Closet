import './index.scss';
import { Link } from 'react-router-dom';


export default function Menu() {
    return(
       <section className='pagina-Menu'> 
        <img src="./assets/images/logo.png" alt="logo" />
          <div className="page">
            <h1>Seja Bem-Vindo a DC closet</h1>
            <Link to="/Cadastro-Produto" className="btn-1">CADASTRAR PRODUTO</Link>
            <Link to="/Visualizar-Produto" className="btn-2">VISUALIZAR PRODUTO</Link>
            <Link to='/' className="link-voltar">Voltar para página inicial</Link>
        </div>
    </section>


    );
}

