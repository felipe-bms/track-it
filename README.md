# Track It

https://track-it-virid-gamma.vercel.app/

Track It é uma aplicação web para ajudar as pessoas a consolidar uma rotina de hábitos. Os usuários podem cadastrar novos hábitos, selecionar os dias da semana em que serão realizados e acompanhar o progresso diariamente.

## Funcionalidades

- **Cadastro de Usuário**: Permite a criação de uma nova conta de usuário.
- **Login de Usuário**: Permite que os usuários façam login na aplicação.
- **Cadastro de Hábitos**: Os usuários podem cadastrar novos hábitos, especificando os dias da semana em que desejam realizá-los.
- **Listagem de Hábitos**: Exibe os hábitos cadastrados pelo usuário.
- **Marcar Hábitos como Feitos**: Os usuários podem marcar hábitos como concluídos para o dia atual.
- **Desmarcar Hábitos como Feitos**: Os usuários podem desmarcar hábitos como não concluídos para o dia atual.
- **Visualização de Hábitos Diários**: Exibe os hábitos do usuário para o dia atual, com a possibilidade de marcar/desmarcar como feitos.

## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **Styled Components**: Biblioteca para estilização de componentes React utilizando tagged template literals.
- **Axios**: Cliente HTTP baseado em Promises para fazer requisições HTTP.
- **React Router DOM**: Biblioteca para controle de rotas na aplicação React.
- **React Loader Spinner**: Biblioteca para exibir spinners de carregamento durante operações assíncronas.
- **Date-fns**: Biblioteca para manipulação e formatação de datas.
- **Material Icons**: Biblioteca de ícones do Material Design para React.

## Como Executar o Projeto

### Pré-requisitos

- Node.js instalado
- Gerenciador de pacotes npm ou yarn

### Passos

1. **Clone o repositório:**
    ```sh
    git clone https://github.com/USERNAME/REPOSITORY_NAME.git
    cd REPOSITORY_NAME
    ```

2. **Instale as dependências:**
    ```sh
    npm install
    ```

    ou

    ```sh
    yarn install
    ```

3. **Execute o projeto:**
    ```sh
    npm start
    ```

    ou

    ```sh
    yarn start
    ```

A aplicação estará disponível em `http://localhost:3000`.

## Estrutura do Projeto

- **src**
  - **assets**: Arquivos estáticos como imagens.
  - **components**: Componentes reutilizáveis da aplicação.
  - **contexts**: Contextos para gerenciamento de estado global.
  - **pages**: Páginas principais da aplicação.
  - **routes**: Configuração de rotas da aplicação.
  - **styles**: Arquivos de estilização.
  - **utils**: Funções utilitárias.

## Autores

- Felipe Barreto Marques da Silva

## Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.
