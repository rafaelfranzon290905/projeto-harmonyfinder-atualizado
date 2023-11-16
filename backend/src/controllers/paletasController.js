// Importa as configurações do banco de dados na variável connection
const connection = require('../config/db');

// Pacote para criptografar a senha de usuario
const bcrypt = require('bcrypt');

// Função que cria um novo usuário 
async function storePaleta(request, response) {
    // Preparar o comando de execução no banco
    const query = 'INSERT INTO paletas(cor1, cor2, cor3, cor4) VALUES(?, ?, ?, ?);';

    // Recuperar os dados enviados na requisição
    const params = Array(
        request.body.cor1,
        request.body.cor2,
        request.body.cor3,
        request.body.cor4
    );

    // Executa a ação no banco e valida os retornos para o client que realizou a solicitação
    connection.query(query, params, (err, results) => {
        try {
            if (results) {
                response
                    .status(201)
                    .json({
                        success: true,
                        message: `Sucesso! Paletas cadastradas`,
                        data: results
                    });
            } else {
                response
                    .status(400)
                    .json({
                        success: false,
                        message: `Não foi possível realizar o cadastro. Verifique os dados informados`,
                        query: err.sql,
                        sqlMessage: err.sqlMessage
                    });
            }
        } catch (e) { // Caso aconteça algum erro na execução
            response.status(400).json({
                    succes: false,
                    message: "Ocorreu um erro. Não foi possível cadastrar a paleta!",
                    query: err.sql,
                    sqlMessage: err.sqlMessage
                });
        }
    });
}

module.exports = {
    storePaleta
}