const conn = require("../database/connection");

module.exports = {
  async create(req, res) {
    const { title, description, value } = req.body;
    const ong_id = req.headers.authorization;

    const [id] = await conn("incidents").insert({
      title,
      description,
      value,
      ong_id
    });

    res.json({ id });
  },
  async index(req, res) {
    const { page = 1 } = req.query;

    const [count] = await conn("incidents").count();

    const incidents = await conn("incidents")
      .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
      .limit(5)
      .offset((page - 1) * 5)
      .select([
        'incidents.*',
        'ongs.name',
        'ongs.email',
        'ongs.whatsapp',
        'ongs.city',
        'ongs.uf'
      ]);
    res.header("X-Total-Count", count["count(*)"]);
    res.json(incidents);
  },
  async delete(req, res) {
    const { id } = req.params;
    const ong_id = req.headers.authorization;
    const incident = await conn("incidents")
      .where("id", id)
      .select("ong_id")
      .first();

    if (incident) {
      if (incident.ong_id !== ong_id) {
        res.status(401).json({
          error: "operation not permitted."
        });
      } else {
        await conn("incidents")
          .where("id", id)
          .delete();
        res.status(204).send();
      }
    } else {
      res.status(404).json({ error: "Not Found" });
    }
  }
};
