BestShowME

Este é um projeto React Native criado com Expo, para listar e interagir com uma lista de vídeos.

Antes de começar, verifique se você tem as seguintes ferramentas instaladas:
Node.js (versão 14 ou superior)
Expo CLI (globalmente instalado)
Para instalar o Expo CLI, você pode usar o seguinte comando:
sh
Copiar código
npm install -g expo-cli
Instalação

Clone o repositório:
sh
Copiar código
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
Instale as dependências:
sh
Copiar código
npm install
Inicie o servidor de desenvolvimento Expo:
sh
Copiar código
expo start
Isso abrirá o Expo Developer Tools no seu navegador padrão. Você pode usar o QR code exibido para abrir o aplicativo em seu dispositivo móvel usando o Expo Go.
Uso

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
Para mais detalhes sobre como configurar e usar o react-navigation, consulte a documentação oficial.
Integração com APIs

Scripts Disponíveis

No diretório do projeto, você pode usar os seguintes comandos:
npm start - Inicia o servidor de desenvolvimento Expo.
npm run android - Inicia o aplicativo no emulador Android.
npm run ios - Inicia o aplicativo no simulador iOS (MacOS necessário).
npm run build - Cria uma versão de produção do aplicativo.

