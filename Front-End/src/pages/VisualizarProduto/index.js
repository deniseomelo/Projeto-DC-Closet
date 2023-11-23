import './index.scss';
import { Link} from 'react-router-dom';
import { useEffect, useState } from 'react';
import './index.scss';
import axios from 'axios';



export default function VisualizarProduto() {
  const [listaProdutos, setListaProdutos] = useState([]);
  const [termoBusca, setTermoBusca] = useState('');
  
  

  const buscarProdutos = async () => {
    try {
      const response = await axios.get('http://191.234.194.31:5000/produto'); // Verifique a URL
      const produtos = response.data;
  
      if (termoBusca) {
        // Filtra os produtos com base na descrição
        const produtosFiltrados = produtos.filter((produto) =>
          produto.descricao.toLowerCase().includes(termoBusca.toLowerCase())
        );
        setListaProdutos(produtosFiltrados);
      } else {
        setListaProdutos(produtos);
      }
    } catch (error) {
      console.error('Erro ao buscar produtos:', error);
    }
  };

  async function remover(codigo) {
    console.log('Excluindo produto com ID:', codigo);
    try {
      let r = await axios.delete(`http://191.234.194.31:5000/produto/${codigo}`); // Adicione uma barra (/) entre "produto" e o ID
      console.log('Resposta da exclusão:', r);
      alert('Deseja Apagar Produto?');
      buscarProdutos();
    } catch (error) {
      console.error('Erro ao excluir o produto:', error);
    }
  }

  useEffect(() => {
    buscarProdutos();
  }, []); // Quando a tela carregar



  return (
    <section className="pagina-VisualizarProduto">
      <img src="./assets/images/logo.png" alt="logo" />
      <div className="page">
        <h1>Buscar Produtos</h1>
        <div className="buscar-barra">
          <input
            type="text"
            placeholder="Buscar Produto"
            value={termoBusca}
            onChange={(e) => setTermoBusca(e.target.value)}
          />
          <button onClick={buscarProdutos} className='btn-busca'>Buscar</button>
        </div>
        <div className="produto-lista">
        {listaProdutos.map((produto) => (
            <div className="produto" key={produto.id}>
              <h3>Produto</h3>
              <p>
                <strong>Categoria:</strong> {produto.categoria}
              </p>
              <p>
                <strong>Tamanho:</strong> {produto.tamanho}
              </p>
              <p>
                <strong>Preço:</strong> R${produto.preco}
              </p>
              <p>
                <strong>Descrição:</strong> {produto.descricao}
              </p>
              <button className="editar-button" onClick={() => window.location.href=`/editar-produto/${produto.codigo}`}>Editar
                                                                 </button>
              <button onClick={() => remover(produto.codigo)} className="deletar-button">Excluir</button>
            </div>
          ))}
        </div>
        
        <Link to="/Menu" className="link-voltar">
          Voltar para Página Menu
        </Link>
      </div>
    </section>
  );
}
