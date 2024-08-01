BestShowME

Este é um projeto React Native criado com Expo desenvolvido para as plataformas iOS e Android, para listar e interagir com uma lista de vídeos.
O projeto esta em MVVM e utiliza routes para navegação.

Antes de começar, verifique se você tem as seguintes ferramentas instaladas:
Node.js (versão 14 ou superior)
Expo CLI (globalmente instalado)
Para instalar o Expo CLI, você pode usar o seguinte comando:
npm install -g expo-cli

Clone o repositório & Instale as dependências:
npm install

Inicie o servidor de desenvolvimento Expo:
expo start
Isso abrirá o Expo Developer Tools no seu terminal. Você pode usar o QR code exibido para abrir o aplicativo em seu dispositivo móvel usando o Expo Go ou ainda selecionar as opções (i) para rodar o app em seu simulador iOS, e a para simulador Android.

Estrutura

src/: Contém o código-fonte do aplicativo.
components/: Componentes reutilizáveis.
modules/: Contem as 
screens/: Telas do aplicativo.
router/: Configuração de navegação.
utils/: Funções utilitárias e constantes.
services/: Integrações API
App.js: Ponto de entrada do aplicativo.
Navegação

O projeto utiliza a biblioteca react-navigation para gerenciar a navegação entre as telas. A configuração básica está localizada na pasta routes/.

Integração com APIs
O app foi desenvolvido utilizando o jsonServer/db.json
Extraia essa pasta do projeto, e execute o comando npx json-server db.json para executa-lo em seu localhost.
