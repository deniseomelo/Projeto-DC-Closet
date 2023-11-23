import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './index.scss';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';


export default function EditarProduto() {
  const [produto, setProduto] = useState({
    codigo: '',
    categoria: '',
    tamanho: '',
    preco: '',
    descricao: '',
  });


  const { codigo } = useParams();


  useEffect(() => {
    if (codigo) {
      async function fetchData() {
        try {
          const response = await axios.get(`http://191.234.194.31:5000/produto/${codigo}`);
          setProduto(response.data);
        } catch (error) {
          console.error('Erro ao buscar detalhes do produto:', error);
        }
      }
  
      fetchData();
    }
  }, [codigo]);

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    console.log('Função handleSubmit está sendo chamada.');
    try {
      await axios.put(`http://191.234.194.31:5000/produto/${codigo}`, produto);
      alert('Produto atualizado com sucesso');
    } catch (error) {
      console.error('Erro ao atualizar o produto:', error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProduto((prevProduto) => ({
      ...prevProduto,
      [name]: value,
    }));
  };

  return (
    <section className='comp-edicao'>
      
      <img src="../assets/images/logo.png" alt="logo" />
        <div className="page-edicao">
      <form className=" formulario"onSubmit={handleSubmit}>
        <div className='form-group'>
          <h1>Editar Produto</h1>
          <label>Categoria</label>
          <input 
          type="text" 
          name="categoria" 
          value={produto.categoria} 
          onChange={handleChange} />
        
          <label>Tamanho</label>
          <input 
          type="text" 
          name="tamanho" 
          value={produto.tamanho} onChange={handleChange} />
        
          <label>Preço</label>
          <input 
          type="text" 
          name="preco" 
          value={produto.preco} 
          onChange={handleChange} />
        
          <label>Descrição</label>
          <textarea 
          name="descricao" 
          value={produto.descricao} 
          onChange={handleChange} />
        </div>
        <button type="submit">Atualizar Produto</button> 
        <div>
      <Link to="/Visualizar-Produto" className="link-voltar">
          Voltar para Página Visualizar
        </Link>
      </div>
      </form>
      </div>
    </section>
   
  );
}