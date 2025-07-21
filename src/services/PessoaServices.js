const Services = require('./services');

class PessoaServices extends Services {
  constructor() {
    super('Pessoa');
  }

  async pegaMatriculasPorEstudante(id) {
    const estudante = await super.pegarRegistrosPorId(id);
    return await estudante.getAulasMatriculadas();
  }
}


module.exports = PessoaServices;