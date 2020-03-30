const crypto = require("crypto")

const conn = require('../database/connection')

module.exports = {
  async create(req, res) {
    const { name, email, whatsapp, city, uf } = req.body;

    const id = crypto.randomBytes(4).toString("HEX");

    await conn("ongs").insert({
      id,
      name,
      email,
      whatsapp,
      city,
      uf
    });

    res.json({ id });
  },
  async index(req, res) {
    const ongs = await conn('ongs').select('*')
    console.log(ongs)
  
    res.json(ongs)
  }
  
};
