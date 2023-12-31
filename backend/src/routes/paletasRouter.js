// Importar o modulo de Router do express
const { Router } = require('express');
// Instanciar o Router na variável router
const router = Router();

// Importar as funções (processamento da requisição) do controller
const { 
    storePaleta,
    listPaletas
} = require('../controllers/paletasController')

// Criar os endpoints (rotas) que serão acessados a partir dos métodos HTTP (get,post,put,delete)
router.post('/salvar/paleta', storePaleta);
router.get('/salvar/:id', listPaletas);


module.exports = router;