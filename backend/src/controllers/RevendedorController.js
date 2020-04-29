const crypto = require('crypto');
const connection = require('../database/connection');


module.exports = {

  async index(request, response) {
    const revendedor = await connection('revendedor').select('*');

    return response.json(revendedor);
  },

  async create(request, response) {
    const { name, cpf, email, senha } = request.body;
    const id = crypto.randomBytes(4).toString('HEX');

    await connection('revendedor').insert({
      id,
      name,
      cpf,
      email,
      senha,
    })

    return response.json({ id });
  }
};