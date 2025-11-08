# 🌿 Portfólio Pessoal

Portfólio pessoal desenvolvido em React, apresentando meus projetos, experiências e formas de contato de maneira clean e profissional.

---

## 🚀 Tecnologias Utilizadas

- **React** - Biblioteca JavaScript para construção de interfaces
- **React Router DOM** - Navegação entre páginas
- **Vite** - Build tool rápido e moderno
- **Tabler Icons** - Biblioteca de ícones
- **CSS3** - Estilização customizada

---

## 📦 Instalação e Execução

```bash
# Criar projeto
npm create vite@latest meu-portfolio -- --template react

# Entrar na pasta
cd meu-portfolio

# Instalar dependências
npm install

# Instalar bibliotecas adicionais
npm i react-router-dom
npm install @tabler/icons-react
npm install @fontsource/fira-code @fontsource/inter

# Executar projeto
npm run dev
```

---

## 🎨 Identidade Visual

### Paleta de Cores

- **Background Principal:** `#1e1e1e` — fundo escuro moderno
- **Background Secundário:** `#0D1117` — usado em cards e seções de destaque
- **Cor de Destaque:** `#3b7a57` — verde suave para botões, bordas e ícones
- **Texto Principal:** `#fefefe` — branco para alta legibilidade
- **Texto Secundário:** `#b0b0b0`, `#d0d0d0`, `#999` — variações de cinza para hierarquia
- **Links:** `#4a9ed8` — azul claro para links externos

### Tipografia

- **Títulos (h1-h6):** `Fira Code` — fonte monospace para visual tech
- **Texto base:** `Inter` — moderna e legível para corpo de texto
- **Tags e código:** `Fira Code` — consistência visual em elementos técnicos

---

## 📂 Estrutura do Projeto

```src/
├── components/
│   ├── Navbar.jsx          # Barra de navegação lateral fixa
│   ├── Intro.jsx           # Página inicial de apresentação
│   ├── Sobre.jsx           # Sobre mim, skills e experiências
│   ├── Projetos.jsx        # Grid de projetos com busca
│   └── Contato.jsx         # Formulário de contato
├── App.jsx                 # Rotas e estrutura principal
├── App.css                 # Estilos globais e responsivos
└── main.jsx                # Ponto de entrada da aplicação
```

---

## ✨ Funcionalidades

- **Navegação SPA** - Transição suave entre páginas sem reload
- **Design Responsivo** - Adaptável para desktop, tablet e mobile
- **Busca de Projetos** - Filtro por nome e tecnologias
- **Formulário de Contato** - Campos validados para comunicação
- **Navbar Fixa** - Acesso rápido às seções em qualquer momento
- **Cards Interativos** - Efeitos hover e informações detalhadas dos projetos

---

## 🎯 Páginas

### 🏠 Intro

Página inicial com apresentação, nome e call-to-action para navegação.

### 👤 Sobre Mim

Apresentação pessoal, skills técnicas e experiências profissionais organizadas em timeline.

### 💼 Projetos

Grid de projetos com:

- Sistema de busca por nome ou tecnologia
- Cards com descrição, tags, estrelas e links para demo
- Layout responsivo em 2 colunas (desktop) e 1 coluna (mobile)

### 📧 Fale Comigo

Formulário completo com campos:

- Nome e e-mail
- Motivo do contato (select)
- Como me encontrou
- Descrição da ideia
- Requisitos do projeto

---

## 🛠 Atalhos e Ferramentas

### Extensões VS Code

- **ES7+ React/Redux/React-Native snippets** - Snippets para React

### Snippets Úteis

- `rafc` - Cria componente funcional React com arrow function

---

## 📚 Imports Principais

```javascript
// Roteamento
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

// Ícones
import { 
  IconHome, 
  IconUser, 
  IconPresentation,
  IconMail, 
  IconBrandGithub, 
  IconBrandLinkedin,
  IconStar,
  IconExternalLink
} from '@tabler/icons-react'
```

---

## 🎨 Destaques Técnicos CSS

### Layout Responsivo

```css
/* Navbar fixa à esquerda com 65px */
.Navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 65px;
  height: 100vh;
}

/* Conteúdo ocupa 100% da tela menos a navbar */
.section-container {
  padding-left: 65px;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
```

### Breakpoints

- **Desktop:** Navbar lateral 65px
- **Tablet (768px):** Navbar lateral 60px  
- **Mobile (480px):** Navbar horizontal inferior 60px de altura

---

## 📖 Referências

- [Tutorial React](https://www.youtube.com/watch?v=17l6AOc8s10)
- [Formulário Email](https://www.youtube.com/watch?v=Zbg1BHOVzRg)
- [Portfolio Tutorial](https://www.youtube.com/watch?v=YQCDUJ6hhNY)
- [Inspiração Visual](https://vscode-portfolio.vercel.app/)
- [Tabler Icons](https://tabler.io/icons)

---

## 📝 Símbolos HTML Utilizados

- `&rarr;` → Seta para direita
- `&lt;` / `&gt;` → Sinais de menor e maior

---

## 🤝 Contribuições

Sugestões e feedbacks são sempre bem-vindos! Sinta-se à vontade para abrir uma issue ou entrar em contato.

---

## 📄 Licença

Este projeto está sob a licença MIT.

---

**Desenvolvido por Brenda com muita dedicação e com a ajuda de muitas referências**
