# Processo Seletivo Empresa Junior

## Instruções

1.  Abra seu cmd e conecte no MySQL como administrador.

2.  Execute as seguintes linhas de comando no cmd após a conexão.
    2.1: CREATE USER 'prosel'@'localhost' IDENTIFIED BY 'SenhaForte';
    2.2: GRANT ALL PRIVILEGES ON prosel.\* TO 'prosel'@'localhost';
    2.3: FLUSH PRIVILEGES;

3.  Abra a pasta DESAFIO_BACK_ASCII_Matheus Henrique Ribeiro Cardoso no Visual Studio Code (VS Code).

4.  Abra o terminal do VS Code e execute a seguinte linha. 4.1: npx sequelize-cli db:create
