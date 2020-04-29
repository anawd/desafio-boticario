const connection = require('../database/connection');

module.exports = {

  async index(request, response) {
    const purchase = await connection('purchase').select('*');

    return response.json(purchase);
  },

  async create(request, response) {
    const { codigo, value, status, cashback, data } = request.body;
    const revendedor_id = request.headers.authorization;

    const [id] = await connection('purchase').insert({
      codigo,
      value,
      data,
      status,
      cashback,
      revendedor_id,
    });

    return response.json({ id });
  },

  async delete(request, response) {
    const { id } = request.params;
    const revendedor_id = request.headers.authorization;

    const purchase = await connection('purchase')
      .where('id', id)
      .select('revendedor_id')
      .first();

    if (purchase.revendedor_id != revendedor_id) {
      return response.status(401).json({ error: "Operação não permitida" });
    }

    await connection('purchase').where('id', id).delete();

    return response.status(204).send();
  }

};