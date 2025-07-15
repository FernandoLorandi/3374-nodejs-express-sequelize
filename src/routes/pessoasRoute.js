const {Router} = require('express');
const PessoaController = require('../controllers/PessoaController');

const pessoaController = new PessoaController(); //Instancia o controller de pessoas

const router = Router();

router.get('/pessoas', (req, res) => pessoaController.pegaTodos(req, res)); //Rota para pegar todos os registros de pessoas
router.get('/pessoas/:id', (req, res) => pessoaController.pegaPorId(req, res)); //Rota para pegar um registro de pessoa por ID
router.post('/pessoas', (req, res) => pessoaController.criaRegistro(req, res)); //Rota para criar um novo registro de pessoa
router.put('/pessoas/:id', (req, res) => pessoaController.atualizaRegistro(req, res)); //Rota para atualizar um registro de pessoa
router.delete('/pessoas/:id', (req, res) => pessoaController.apagaRegistro(req, res)); //Rota para apagar um registro de pessoa

module.exports = router; //Exporta o roteador para ser usado no app principal (utilizado como um middleware)