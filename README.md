# 📈 IPCA - Índice Nacional de Preços ao Consumidor Amplo
Uma API para consultar e calcular a inflação do IPCA em períodos específicos.

[![Status do Projeto](https://img.shields.io/badge/Status-Concluído-brightgreen.svg)](https://projetohistoricoipca-zbya.onrender.com/historicoipca)
[![Licença MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/Karedog/ProjetoHistoricoIPCA.svg?style=social)](https://github.com/Karedog/ProjetoHistoricoIPCA/stargazers)

---

## 📄 Tabela de Conteúdos
* [Sobre o Projeto](#-sobre-o-projeto)
* [Funcionalidades da API](#-funcionalidades-da-api)
* [Tecnologias Utilizadas](#-tecnologias-utilizadas)
* [Primeiros Passos](#-primeiros-passos)
    * [Pré-requisitos](#pré-requisitos)
    * [Instalação](#instalação)
    * [Rodando o Projeto](#rodando-o-projeto)
* [Como Usar a API](#-como-usar-a-api)
* [Contribuição](#-contribuição)
* [Licença](#-licença)
* [Contato](#-contato)
* [Agradecimentos](#-agradecimentos)

---

## 💡 Sobre o Projeto

Este projeto consiste em uma API RESTful para **consultar os valores do IPCA (Índice Nacional de Preços ao Consumidor Amplo)** e realizar o **cálculo de juros** com base nesses índices em períodos específicos.

A API disponibiliza dados históricos do IPCA abrangendo o período de **janeiro de 2015 a maio de 2023**, permitindo que usuários e desenvolvedores integrem facilmente dados de inflação em suas aplicações.

**Link da Aplicação/API:** [https://projetohistoricoipca-zbya.onrender.com/historicoipca](https://projetohistoricoipca-zbya.onrender.com/historicoipca)

---

## ✨ Funcionalidades da API

A API oferece os seguintes endpoints para consulta e cálculo:

* **Consulta de todos os dados do IPCA:** Retorna o histórico completo do IPCA disponível.
* **Consulta por ano específico:** Filtra o histórico do IPCA por um ano desejado.
* **Consulta por ID:** Retorna um registro específico do IPCA baseado em seu ID único.
* **Cálculo de juros:** Aplica o índice de juros do IPCA acumulado sobre um valor em um período determinado.

---

## 🛠️ Tecnologias Utilizadas

Este projeto foi desenvolvido utilizando as seguintes tecnologias:

* **Backend:**
    * [Node.js](https://nodejs.org/) - Ambiente de tempo de execução JavaScript.
    * [Express.js](https://expressjs.com/) - Framework web para Node.js.
      
* **Hospedagem:**
    * [Render](https://render.com/) - Para deploy da aplicação.

---

## 🚀 Primeiros Passos

Siga estas instruções para obter uma cópia do projeto e executá-lo em sua máquina local para desenvolvimento e teste.

### Pré-requisitos

Certifique-se de ter os seguintes softwares instalados:

* [Node.js](https://nodejs.org/en/download/) (versão LTS recomendada)
* [npm](https://www.npmjs.com/) (geralmente vem com Node.js) ou [Yarn](https://yarnpkg.com/)
* [Git](https://git-scm.com/downloads)

### Instalação

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/Karedog/ProjetoHistoricoIPCA.git](https://github.com/Karedog/ProjetoHistoricoIPCA.git)
    ```
2.  **Navegue até o diretório do projeto:**
    ```bash
    cd ProjetoHistoricoIPCA
    ```
3.  **Instale as dependências do projeto:**
    ```bash
    npm install
    # ou
    yarn install
    ```
4.  **Configuração do Banco de Dados (se aplicável):**
    * Se for um ambiente de desenvolvimento local, pode ser necessário configurar um banco de dados PostgreSQL e as variáveis de ambiente correspondentes (ex: arquivo `.env` com `DATABASE_URL`). Consulte a documentação do projeto para detalhes sobre a configuração do banco de dados.

### Rodando o Projeto

1.  **Inicie o servidor da API:**
    ```bash
    npm start
    # ou
    yarn start
    ```
    O servidor estará rodando em `http://localhost:port` (a porta padrão geralmente é 3000 ou 5000, verifique a configuração do seu `server.js` ou similar).

---

## 💡 Como Usar a API

A API é acessada através de requisições HTTP (`GET`) para os seguintes endpoints:

### 1. Consultar todos os dados do IPCA

Retorna uma lista completa de todos os índices do IPCA disponíveis na base de dados (janeiro de 2015 a maio de 2023).

* **URL:** `https://projetohistoricoipca-zbya.onrender.com/historicoipca`
* **Método:** `GET`

### 2. Consultar dados de um ANO específico

Retorna todos os índices do IPCA referentes a um ano específico.

* **URL:** `https://projetohistoricoipca-zbya.onrender.com/historicoipca/ano/:ano`
* **Método:** `GET`
* **Exemplo:** Para consultar os dados de 2021:
    `https://projetohistoricoipca-zbya.onrender.com/historicoipca/ano/2021`

### 3. Consultar um registro específico por ID

Retorna o dado do IPCA referente ao ID escolhido.

* **URL:** `https://projetohistoricoipca-zbya.onrender.com/historicoipca/id/:id`
* **Método:** `GET`
* **Exemplo:** Para consultar o registro com ID 5:
    `https://projetohistoricoipca-zbya.onrender.com/historicoipca/id/5`

### 4. Calcular juros com base no IPCA em um período

Retorna o valor final após aplicar o juros do IPCA acumulado em um período especificado.

* **URL:** `https://projetohistoricoipca-zbya.onrender.com/historicoipca/calculo?valor=:valor&mesInicial=:mesInicial&anoInicial=:anoInicial&mesFinal=:mesFinal&anoFinal=:anoFinal`
* **Método:** `GET`
* **Parâmetros de Query:**
    * `valor`: O valor inicial sobre o qual o juros será calculado (numérico).
    * `mesInicial`: O número do mês inicial (1 para janeiro, 12 para dezembro).
    * `anoInicial`: O ano inicial (numérico).
    * `mesFinal`: O número do mês final (1 para janeiro, 12 para dezembro).
    * `anoFinal`: O ano final (numérico).
* **Exemplo:** Para calcular o juros de R\$ 1000,00 de janeiro de 2020 a dezembro de 2022:
    `https://projetohistoricoipca-zbya.onrender.com/historicoipca/calculo?valor=1000&mesInicial=1&anoInicial=2020&mesFinal=12&anoFinal=2022`

---

## 🤝 Contribuição

Contribuições são **muito bem-vindas**! Se você tem sugestões de melhorias, encontrou um bug ou quer adicionar uma nova funcionalidade, sinta-se à vontade para abrir uma issue ou um Pull Request.

1.  Faça um **fork** do projeto.
2.  Crie uma nova branch para sua feature (`git checkout -b feature/minha-nova-feature`).
3.  Faça suas alterações e **comite** seguindo as [diretrizes de mensagens de commit](https://www.conventionalcommits.org/en/v1.0.0/).
4.  Faça o **push** da sua branch (`git push origin feature/minha-nova-feature`).
5.  Abra um **Pull Request** detalhado.

---

## 📝 Licença

Este projeto está licenciado sob a **Licença MIT**. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 📧 Contato

* **Karedog** - [Seu perfil do GitHub](https://github.com/Karedog)

---

## 🙏 Agradecimentos

* Ao **Render** pela plataforma de deploy fácil de usar.
* À comunidade de desenvolvimento web por todo o suporte e recursos.

---
