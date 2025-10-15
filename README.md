# Processo Seletivo Empresa Junior

## Instruções

1.  Crie uma pasta e coloque todos os arquivos

2.  Abra seu cmd e conecte no MySQL como administrador.

3.  Execute as seguintes linhas de comando no cmd após a conexão.
    2.1: CREATE USER 'prosel'@'localhost' IDENTIFIED BY 'SenhaForte';
    2.2: GRANT ALL PRIVILEGES ON prosel.\* TO 'prosel'@'localhost';
    2.3: FLUSH PRIVILEGES;

4.  Abra a pasta com todos os arquivos no Visual Studio Code (VS Code).

5.  Abra o terminal do VS Code e execute a seguinte linha. 4.1: npx sequelize-cli db:create.

6.  Tendo o node.js instalado na sua maquina, abra um novo cmd execute a linha: npm install --save nodemon.

7.  Direcione seu cmd até a pasta criada e execute a linha: nodemon app.js.

8.  Vá até a pasta models e nos arquivos Categoria.js e Produto.js comente ou apague as linhas determinadas.
