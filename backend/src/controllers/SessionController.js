const connection = require('../database/connection');

module.exports = {
  async create(request, response) {
    const { email, senha } = request.body;

    const revendedor = await connection('revendedor')
      .where({
        email,
        senha
      })
      .select('name')
      .first();



    if (!revendedor) {
      return response.status(404).json({ error: 'Revendedor favor verificar seu email e senha' })
    }
    return response.json(revendedor);
  }
}