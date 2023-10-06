# MailBlitz

MailBlitz é uma aplicação que permite o envio eficiente de e-mails em massa para uma lista pré-determinada. Esta aplicação utiliza a API do Gmail para enviar e-mails de forma automática.

## Pré-requisitos

Antes de começar, você precisa ter instalado em sua máquina o Node.js e o npm.

### Instalação

Para instalar as dependências do projeto, utilize o seguinte comando:

```bash
npm install
```

### Configuração do arquivo .env

Antes de iniciar o servidor, é necessário configurar um arquivo .env com as seguintes informações:

```shell
CLIENT_ID=SEU_CLIENT_ID
CLIENT_SECRET=SEU_CLIENT_SECRET
REDIRECT_URI=https://developers.google.com/oauthplayground
REFRESH_TOKEN=SEU_REFRESH_TOKEN
EMAIL=example@email
```

Certifique-se de substituir seu CLIENT_ID, seu CLIENT_SECRET e seu REFRESH_TOKEN pelos valores apropriados obtidos durante o registro do seu aplicativo no Google Developers Console.

### Executando o projeto
Após instalar as dependências e configurar o arquivo .env, você pode iniciar o servidor com o seguinte comando:

```BASH
npm start
```

### Licença

Este projeto está licenciado sob a [Licença MIT](LICENSE.txt).
