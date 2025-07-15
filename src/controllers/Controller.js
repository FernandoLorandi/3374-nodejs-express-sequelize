class Controller {
  constructor(entidadeService) {
    this.entidadeService = entidadeService;
  }

  async pegaTodos(req, res) {
    try {
      const listaDeRegistros = await this.entidadeService.pegaTodosOsRegistros();
      return res.status(200).json(listaDeRegistros);
    } catch (erro) {
      res.status(500).json({error: erro});
    }
  }

  async pegaPorId(req, res) {
    const {id} = req.params;
    try {
      const registro = await this.entidadeService.pegarRegistrosPorId(id);
      if (!registro) {
        return res.status(404).json({message: 'Registro não encontrado'});
      }
      return res.status(200).json(registro);
    } catch (erro) {
      res.status(500).json({error: erro});
    }
  }


  async atualizaRegistro(req, res) {
    const {id} = req.params; //Id dentro de chaves para desestruturar o objeto params
    const dadosAtualizados = req.body;
    try {
      const foiAtualizado = await this.entidadeService.atualizaRegistro(Number(id), dadosAtualizados);
      if (!foiAtualizado) {
        return res.status(404).json({message: 'Registro não encontrado'});
      }
      return res.status(200).json({message: 'Registro atualizado com sucesso'});
    } catch (erro) {
      res.status(500).json({error: erro});
    }
  }

  async criaRegistro(req, res) {
    const dados = req.body;
    try {
      const novoRegistro = await this.entidadeService.criaRegistro(dados);
      if (!novoRegistro) {
        return res.status(400).json({message: 'Erro ao criar registro'});
      }
      return res.status(201).json({novoRegistro, message: 'Registro criado com sucesso'});
    } catch (erro) {
      res.status(500).json({error: erro});
    }
  }

  async apagaRegistro(req, res) {
    const {id} = req.params;
    try {
      const foiApagado = await this.entidadeService.apagaRegistro(Number(id));
      if (!foiApagado) {
        return res.status(400).json({message: 'Erro ao apagar registro  '});
      }
      return res.status(200).json({message: 'Registro apagado com sucesso'});
    } catch (erro) {
      res.status(500).json({error: erro});
    }
  }


}

module.exports = Controller;