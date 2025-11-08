import React, { useState } from 'react';
import { IconPresentation, IconStar, IconExternalLink } from '@tabler/icons-react';

export const Projetos = () => {
  const [busca, setBusca] = useState('');

  const projetos = [
    {
      id: 1,
      nome: 'Vinheria Verde',
      descricao: 'E-commerce de vinhos com foco em sustentabilidade e produtores locais.',
      tags: ['React', 'Node.js', 'CSS'],
      stars: 8,
      data: 'Out/2024',
      demo: 'https://github.com/bresantos/Vinheria-Agnello'
    },
    {
      id: 2,
      nome: 'EcoConecta',
      descricao: 'Plataforma sobre práticas sustentáveis e consumo consciente.',
      tags: ['React', 'Tailwind', 'API REST'],
      stars: 12,
      data: 'Jul/2024',
      demo: 'https://github.com/bresantos/gs_bueiro-inteligente'
    },
    {
      id: 3,
      nome: 'Meninas em Campo',
      descricao: 'Projeto social que incentiva meninas a jogar futebol.',
      tags: ['Next.js', 'MongoDB'],
      stars: 9,
      data: 'Set/2024',
      demo: 'href="https://github.com/bresantos/challenge-passa-a-bola'
    },
    {
      id: 4,
      nome: 'Movimento Vital',
      descricao: 'Projeto social de fisioterapia e esportes para idosos, com ações de limpeza de praias.',
      tags: ['React', 'Express', 'Node.js'],
      stars: 5,
      data: 'Em desenvolvimento',
      demo: 'IN DEVELOPMENT'
    }
  ];

  const projetosFiltrados = projetos.filter(p =>
    p.nome.toLowerCase().includes(busca.toLowerCase()) ||
    p.tags.some(tag => tag.toLowerCase().includes(busca.toLowerCase()))
  );

  return (
    <div className='section-container'>
      <div className='projetos-container'>
        <div className='titulo-projetos'>
          <h1><IconPresentation stroke={2} /> Projetos</h1>
        </div>

        <div className='busca-projetos'>
          <input
            type="text"
            placeholder="Buscar projetos..."
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
          />
        </div>

        <div className='grid-projetos'>
          {projetosFiltrados.map(p => (
            <div key={p.id} className='card-projeto'>
              <div className='card-header'>
                <IconPresentation size={32} stroke={1.5} />
                <div className='card-stars'>
                  <IconStar size={16} stroke={2} fill='currentColor' />
                  {p.stars}
                </div>
              </div>

              <h3>{p.nome}</h3>
              <p>{p.descricao}</p>

              <div className='card-tags'>
                {p.tags.map((tag, i) => (
                  <span key={i}>{tag}</span>
                ))}
              </div>

              <div className='card-footer'>
                <span>{p.data}</span>
                <a href={p.demo} target="_blank" rel="noopener noreferrer">
                  Ver demo <IconExternalLink size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {projetosFiltrados.length === 0 && (
          <p className='mensagem-vazio'>Nenhum projeto encontrado</p>
        )}
      </div>
    </div>
  );
};
