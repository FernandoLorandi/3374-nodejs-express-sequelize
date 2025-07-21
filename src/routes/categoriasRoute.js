const {Router} = require('express');
const CategoriaController = require('../controllers/CategoriaController');

const categoriaController = new CategoriaController(); //Instancia o controller de categorias

const router = Router();

router.get('/categorias', (req, res) => categoriaController.pegaTodos(req, res)); //Rota para pegar todos os registros de categorias
router.get('/categorias/:id', (req, res) => categoriaController.pegaPorId(req, res)); //Rota para pegar um registro de categoria por ID
router.post('/categorias', (req, res) => categoriaController.criaRegistro(req, res)); //Rota para criar um novo registro de categoria
router.put('/categorias/:id', (req, res) => categoriaController.atualizaRegistro(req, res)); //Rota para atualizar um registro de categoria
router.delete('/categorias/:id', (req, res) => categoriaController.apagaRegistro(req, res)); //Rota para apagar um registro de categoria

module.exports = router; //Exporta o roteador para ser usado no app principal (utilizado como um middleware)