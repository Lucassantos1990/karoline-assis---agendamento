# Karolina Assis - App de Agendamento

Este é o projeto para o sistema de agendamento online do salão Karolina Assis.

## Como Publicar no GitHub Pages (Passo a Passo)

Siga estas instruções para colocar seu site no ar.

### Pré-requisitos

- **Node.js**: [Instale a partir daqui](https://nodejs.org/en/) (versão LTS é recomendada).
- **Git**: [Instale a partir daqui](https://git-scm.com/downloads).
- **Conta no GitHub**: [Crie uma gratuitamente](https://github.com).

---

### Passo 1: Crie uma Pasta Limpa para o Projeto

1.  Crie uma **NOVA PASTA VAZIA** no seu computador. Dê a ela o nome do seu projeto (ex: `karolina-assis-app`).
2.  **É muito importante começar com uma pasta vazia para evitar erros.**
3.  Agora, salve **TODOS** os arquivos desta nova versão que eu te enviei dentro desta pasta. Certifique-se de recriar a estrutura de pastas exatamente como fornecido (com a pasta `src` e as subpastas `components` e `client`).

### Passo 2: Instale as Dependências

1.  Abra o terminal (CMD, PowerShell ou Terminal) na pasta do projeto que você acabou de criar.
2.  Execute o seguinte comando para instalar todas as dependências necessárias:
    ```bash
    npm install
    ```

### Passo 3: Edite o `package.json`

1.  Abra o arquivo `package.json`.
2.  Encontre a linha `"homepage": "https://SEU-USUARIO-GITHUB.github.io/NOME-DO-SEU-REPOSITORIO",`
3.  **Substitua** `SEU-USUARIO-GITHUB` pelo seu nome de usuário do GitHub.
4.  **Substitua** `NOME-DO-SEU-REPOSITORIO` pelo nome que você dará ao seu repositório no GitHub (ex: `karolina-assis-app`).

    **Exemplo:** Se seu usuário é `karolinaassis` e o nome do repositório é `agendamento-online`, a linha ficará assim:
    `"homepage": "https://karolinaassis.github.io/agendamento-online",`

### Passo 4: Crie o Repositório no GitHub e Envie o Código

1.  Crie um novo repositório no [GitHub](https://github.com/new) com o mesmo nome que você usou no passo anterior.
2.  Volte para o terminal, na pasta do seu projeto, e execute os seguintes comandos, **um por um**:

    ```bash
    git init
    git add .
    git commit -m "Versão inicial do app de agendamento"
    git branch -M main
    ```
3.  Copie a URL do seu repositório no GitHub e execute o comando abaixo (substituindo a URL):
    ```bash
    git remote add origin https://github.com/SEU-USUARIO-GITHUB/NOME-DO-SEU-REPOSITORIO.git
    ```
4.  Envie o código para o GitHub:
    ```bash
    git push -u origin main
    ```

### Passo 5: Publique o Site (Deploy)

1.  Com tudo configurado, execute o comando mágico no terminal:
    ```bash
    npm run deploy
    ```

Aguarde o processo terminar. Ele vai criar a versão final do seu site e enviá-la para uma branch especial no seu repositório chamada `gh-pages`.

### Passo 6: Verifique as Configurações no GitHub

1.  Vá para a página do seu repositório no GitHub.
2.  Clique em **"Settings"** (Configurações) > **"Pages"**.
3.  Na seção "Build and deployment", verifique se a "Source" está configurada para **"Deploy from a branch"** e se a branch selecionada é a **`gh-pages`** com a pasta `/ (root)`. O GitHub geralmente faz isso automaticamente após o passo 5.

**Pronto!** Aguarde alguns minutos e seu aplicativo estará no ar no link que você configurou no `package.json`!