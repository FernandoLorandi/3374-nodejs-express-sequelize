const {Router} = require('express');
const CursoController = require('../controllers/CursoController');

const cursoController = new CursoController(); //Instancia o controller de cursos

const router = Router();

router.get('/cursos', (req, res) => cursoController.pegaTodos(req, res)); //Rota para pegar todos os registros de cursos
router.get('/cursos/:id', (req, res) => cursoController.pegaPorId(req, res)); //Rota para pegar um registro de curso por ID
router.post('/cursos', (req, res) => cursoController.criaRegistro(req, res)); //Rota para criar um novo registro de curso
router.put('/cursos/:id', (req, res) => cursoController.atualizaRegistro(req, res)); //Rota para atualizar um registro de curso
router.delete('/cursos/:id', (req, res) => cursoController.apagaRegistro(req, res)); //Rota para apagar um registro de curso

module.exports = router; //Exporta o roteador para ser usado no app principal (utilizado como um middleware)