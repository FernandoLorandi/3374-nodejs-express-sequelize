const dataSource = require('../models');

class Services {
  constructor(nomeDoModel) {
    this.model = nomeDoModel;
  }

  async pegaTodosOsRegistros() {
    return dataSource[this.model].findAll();
  }

  async pegarRegistrosPorId(id) {
    return dataSource[this.model].findByPk(id);
  }

  async criaRegistro(dados) {
    return dataSource[this.model].create(dados); // Insere um novo registro no banco de dados
  }

  async atualizaRegistro(id, dadosAtualizados) {
    const listaDeRegistrosAtualizados = await dataSource[this.model].update(dadosAtualizados, {where: {id: id}}); // Atualiza o registro com o id especificado
    if (listaDeRegistrosAtualizados[0] === 0) {
      return false;
    }
    return true;
  }

  async apagaRegistro(id) {
    const registroApagado = await dataSource[this.model].destroy({where: {id: id}});
    if (registroApagado[0] === 0) {
      return false;
    }
    return true;
  }
}

module.exports = Services;