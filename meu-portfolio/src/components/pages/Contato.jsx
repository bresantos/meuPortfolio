import React, { useState } from 'react';
import { IconMail } from '@tabler/icons-react';

export const Contato = () => {
  const [form, setForm] = useState({
    nome: '',
    email: '',
    motivo: '',
    comoEncontrou: '',
    ideia: '',
    requisitos: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Dados do formulário:', form);
    alert('Mensagem enviada com sucesso! (Frontend Preview)');
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className='section-container'>
      <div className='contato-container'>
        <div className='contato-wrapper'>
          <div className='titulo-contato'>
            <h1><IconMail stroke={2} /> Fale comigo</h1>
          </div>

          <form className='form-contato' onSubmit={handleSubmit}>
            <div className='form-group'>
              <label htmlFor="nome">Nome</label>
              <input
                type="text"
                id="nome"
                name="nome"
                placeholder="Seu nome completo"
                value={form.nome}
                onChange={handleChange}
                required
              />
            </div>

            <div className='form-group'>
              <label htmlFor="email">E-mail</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="seu@email.com"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className='form-group'>
              <label htmlFor="motivo">Motivo do contato</label>
              <select
                id="motivo"
                name="motivo"
                value={form.motivo}
                onChange={handleChange}
                required
              >
                <option value="">Selecione uma opção</option>
                <option value="projeto">Proposta de Projeto</option>
                <option value="freelance">Trabalho Freelance</option>
                <option value="emprego">Oportunidade de Emprego</option>
                <option value="colaboracao">Colaboração</option>
                <option value="duvida">Dúvida Técnica</option>
                <option value="outro">Outro</option>
              </select>
            </div>

            <div className='form-group'>
              <label htmlFor="comoEncontrou">Como me encontrou</label>
              <input
                type="text"
                id="comoEncontrou"
                name="comoEncontrou"
                placeholder="Ex: LinkedIn, GitHub, indicação..."
                value={form.comoEncontrou}
                onChange={handleChange}
              />
            </div>

            <div className='form-group'>
              <label htmlFor="ideia">Ideia principal do projeto</label>
              <textarea
                id="ideia"
                name="ideia"
                placeholder="Descreva brevemente sua ideia"
                value={form.ideia}
                onChange={handleChange}
                required
              />
            </div>

            <div className='form-group'>
              <label htmlFor="requisitos">Requisitos</label>
              <textarea
                id="requisitos"
                name="requisitos"
                placeholder="Liste os principais requisitos do projeto"
                value={form.requisitos}
                onChange={handleChange}
              />
            </div>

            <button type="submit" className='btn-enviar'>
              Enviar mensagem
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};