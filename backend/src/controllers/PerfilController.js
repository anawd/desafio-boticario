const connection = require('../database/connection');

module.exports = {

  async index(request, response) {
    const revendedor_id = request.headers.authorization;

    const purchase = await connection('purchase')
      .where('revendedor_id', revendedor_id)
      .select('*');

    return response.json(purchase);
  }

}