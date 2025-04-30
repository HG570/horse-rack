# Sistema de Automação dos Bicicletários para a Companhia Paulista de Trens Metropolitanos (CPTM)

Este repositório contém o código-fonte do **Horse-rack**, um sistema web desenvolvido com React.js para automatizar o controle de bicicletários das estações da CPTM. O projeto foi idealizado e prototipado durante o **Hackathon Fatec Cotia e CPTM**, realizado em agosto de 2023.

## 🚀 Funcionalidades

- ✅ Exibição em tempo real de vagas dos bicicletários
- ✅ Cadastro, login, edição e exibição de usuários
- ✅ Cadastro, edição, exibição e exclusão de bicicletas
- ✅ Exibição de QR Code para entrada no bicicletário
- ✅ Visualização das vagas ocupadas e limites por bicicletário
- ✅ Informativos sobre o programa Ciclista Cidadão e paraciclos
- ✅ Temas claro e escuro
- ✅ Acessibilidade com alteração de tamanho de fonte

## 👥 Contribuintes

- Murilo Goivino Tegani  
- Rafael Pinheiro

### 🎓 Orientadores

- Meg Lima Andrade  
- Vickybert Pessoa Freire

---

## 🔧 Tecnologias Utilizadas

- [React.js](https://reactjs.org/) com [Vite](https://vitejs.dev/)
- JavaScript
- Estilização com CSS
- Integração com API via variáveis de ambiente
- Compatível com **Node.js v22.14.0**

---

## ⚙️ Instalação

Siga os passos abaixo para executar o projeto localmente:

### 1. Clone o repositório

```bash
git clone https://github.com/HG570/horse-rack.git
cd horse-rack
```
### 2. Instale as dependências
```bash
npm install
```
### 3. Configure as variáveis de ambiente
Crie um arquivo .env na raiz do projeto com a seguinte variável:
```bash
VITE_API_URL=https://sua-api.com
```
> Essa variável é usada para configurar a URL base da API que será consumida pelo sistema.

### 4. Inicie o projeto
```bash
npm run dev
```
Acesse o sistema em http://localhost:5173.

## 📁 Estrutura de Pastas
```
HORSE-RACK/
├── node_modules/          # Dependências do Node.js
├── public/                # Arquivos públicos (HTML, imagens)
├── src/                   # Código-fonte principal
│   ├── components/        # Componentes reutilizáveis
│   │   ├── button/        # Botões
│   │   ├── common/        # Componentes comuns
│   │   ├── forms/         # Formulários
│   │   ├── layout/        # Layouts
│   │   ├── utils/         # Utilitários
│   ├── contexts/          # Contextos do React
│   ├── img/               # Imagens usadas no projeto
│   ├── pages/             # Páginas da aplicação
│   ├── services/          # Serviços e chamadas de API
│   ├── App.jsx            # Componente raiz da aplicação
│   ├── index.css          # Estilos globais
│   ├── index.jsx          # Ponto de entrada do React
├── .env                   # Variáveis de ambiente
├── .gitignore             # Arquivos ignorados pelo Git
├── index.html             # Página HTML principal
├── package-lock.json      # Registro de dependências do npm
├── package.json           # Configurações e dependências do projeto
├── README.md              # Documentação principal do projeto
├── vite.config.js         # Configuração do Vite
```

## 📄 Licença
Este projeto é acadêmico, desenvolvido exclusivamente para parceria entre Fatec Cotia e CPTM.