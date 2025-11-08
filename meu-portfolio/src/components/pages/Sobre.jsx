import React from 'react'
import { IconCode, IconHeartCode, IconBriefcase2 } from '@tabler/icons-react';

export const Sobre = () => {
  return (
    <div className='section-container'>
      <div className='sobre-container'>
        <div className='titulo-sobre'>
          <h1><IconCode stroke={2} />Sobre mim</h1>
        </div>
        <div className='conteudo-sobre'>
          <div className='descricao-sobre'>
            <p>Atuo no setor financeiro com desenvolvimento e suporte de APIs REST e SOAP, conectando tecnologia e negócio em soluções seguras e eficientes. Tenho experiência com Java, Angular, DevOps, CI/CD e automação de testes. Atualmente curso Engenharia de Software na FIAP e sigo expandindo meus conhecimentos em Python e JavaScript.</p>
            <h3><IconHeartCode stroke={2} /> Fora do código, gosto de viajar sozinha, ler romances e fantasia.</h3>
            <div className='skills-sobre'>
              <div className='hard-skills-sobre'>
                <p>Hard Skills</p>
                <ul>
                  <li>Java</li>
                  <li>Angular</li>
                  <li>JavaScript</li>
                  <li>Python</li>
                  <li>APIs REST e SOAP</li>
                  <li>Postman</li>
                  <li>SQL</li>
                  <li>CI/CD</li>
                  <li>Azure DevOps</li>
                  <li>Git</li>
                  <li>Automação de testes</li>
                </ul>
              </div>
              <br />
              <div className='soft-skills-sobre'>
                <p>Soft Skills</p>
                <ul>
                  <li>Comunicação clara</li>
                  <li>Organização</li>
                  <li>Autonomia</li>
                  <li>Aprendizado contínuo</li>
                  <li>Proatividade</li>
                  <li>Trabalho em equipe</li>
                </ul>
              </div>
            </div>
          </div>

          <div className='experiencia-sobre'>
            <div>
              <h3><IconBriefcase2 stroke={2} /> Timeline Profissional</h3>
            </div>
            <div>
              <h4>Exadel</h4>
              <h5>Engenheira de Software Junior<span>2024 - Atual</span></h5>
              <p>Integração e suporte a APIs REST e SOAP em instituição financeira custodiante. Gestão de releases, documentação técnica e análise de fluxos de negócio.</p>
              <h5>Desenvolvedora Trainee<span>2022 - 2023</span></h5>
              <p>Desenvolvimento backend em Java no sistema Calypso e automação de testes. Projetos de modernização e implantação em nuvem (Azure).</p>
            </div>
            <div>
              <h4>Intel Corporation</h4>
              <h5>Analista de Sistemas Bilingue<span>2021 - 2022</span></h5>
              <p>Suporte técnico e infraestrutura, garantindo performance e padronização de sistemas corporativos.</p>
            </div>
            <div>
              <h4>Dell Technologies</h4>
              <h5>Analista de Suporte Sênior<span>2020 - 2021</span></h5>
              <p>Integração e suporte a APIs REST e SOAP em instituição financeira custodiante. Gestão de releases, documentação técnica e análise de fluxos de negócio.</p>
            </div>
            <div>
              <h4>Touch Consulting</h4>
              <h5>Assistente de Suporte de TI<span>2018 - 2020</span></h5>
              <p>Integração e suporte a APIs REST e SOAP em instituição financeira custodiante. Gestão de releases, documentação técnica e análise de fluxos de negócio.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
