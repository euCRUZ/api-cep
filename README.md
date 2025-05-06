# 📦 Desafio Técnico - Integração com API de CEP

Aplicação Node.js com TypeScript para integração com a API ViaCEP. O sistema permite consultar, armazenar, editar, favoritar e listar CEPs usando um banco MongoDB (MongoDB Atlas). Inclui testes automatizados com Jest e um workflow de integração contínua (CI) via GitHub Actions para garantir que a aplicação seja validada automaticamente a cada push ou pull request.

---

## 🚀 Tecnologias

- **Node.js** + **Express**
- **TypeScript**
- **MongoDB Atlas**
- **Mongoose**
- **Jest** (Testes unitários)
- **Axios** (Requisições HTTP)
- **dotenv** (Variáveis de ambiente)

---

## 📂 Organização do Projeto

O projeto foi estruturado com **boas práticas de organização e separação de responsabilidades**, adotando a arquitetura MVC (Model - View - Controller) e módulos bem definidos como `services`, `routes`, `controllers`, `middlewares` e `models`.

Além disso, para garantir segurança e previsibilidade nos testes automatizados, a aplicação utiliza **dois bancos de dados distintos**:

- **Banco principal (`via-cep`)**: utilizado em ambiente de desenvolvimento e execução normal da API.
- **Banco de testes (`test`)**: utilizado exclusivamente durante a execução dos testes com Jest.

Essa separação garante que os dados reais não sejam afetados por execuções de testes, permitindo segurança e isolamento adequado de ambiente.

A definição dessas conexões está centralizada no arquivo `.env`, que pode ser facilmente ajustado conforme o ambiente:

```env
MONGO_URI=...        # Banco principal
MONGO_URI_TEST=...   # Banco específico para testes
```

## 🚀 Integração Contínua (CI)

O projeto conta com um **workflow de Integração Contínua (CI)** implementado no **GitHub Actions**. O fluxo de CI é responsável por:

- 📦 Instalar as dependências.
- 🧪 Executar os testes automatizados utilizando **Jest**.
- ✅ Garantir que a aplicação funcione corretamente com o banco de dados de testes configurado.

O workflow é ativado automaticamente a cada **push** ou **pull request** para o repositório e está configurado no arquivo:

`.github/workflows/ci.yaml`.

## 🛠️ Como rodar o projeto

### 1. Clone o repositório

```bash
git clone https://github.com/euCRUZ/api-cep
cd api-cep
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Confugure o arquivo `.env`

```bash
cp .env.example .env
```

As URIs fornecidas no `env.example` já apontam para bancos MongoDB configurados exclusivamente para este teste técnico.

### 4. Execute a aplicação

```bash
npm run dev
```

### 5. Testes automatizados

```bash
npm test
```

## 🔐 Ambiente (.env)

Reforçando mais uma vez, você pode usar o arquivo `.env.example` que já vem preenchido com os dados de conexão:

```env
PORT=3000
MONGO_URI=mongodb+srv://dbUserCep:dbUserCep123@cep.osemxyt.mongodb.net/via-cep?retryWrites=true&w=majority&appName=CEP
MONGO_URI_TEST=mongodb+srv://dbUserCep:dbUserCep123@cep.osemxyt.mongodb.net/test?retryWrites=true&w=majority&appName=CEP
```

- Esse usuário têm acesso limitado apenas para leitura e escrita.
- Nenhuma permissão administrativa foi concedida.

## Agradeço a oportunidade de participar deste desafio e espero que tenha gostado do resultado!

- [LinkedIn](https://www.linkedin.com/in/eugiovannicruz/)
- [Portfólio](https://crzweb.vercel.app/)
- Email: giovannicruzvinhedo@gmail.com
