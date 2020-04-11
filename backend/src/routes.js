const express = require("express");
const { celebrate, Segments, Joi } = require("celebrate");

const Ong = require("./controllers/OngController");
const Incident = require("./controllers/IncidentController");
const Profile = require("./controllers/ProfileController");
const Session = require("./controllers/SessionController");

const routes = express.Router();

routes.post("/sessions", Session.create);

routes.get("/ongs", Ong.index);
routes.post(
  "/ongs",
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      name: Joi.string().required(),
      email: Joi.string().required().email(),
      whatsapp: Joi.string().required().min(10).max(11),
      city: Joi.string().required(),
      uf: Joi.string().required().length(2),
    }),
  }),
  Ong.create
);

routes.get(
  "/profile",
  celebrate({
    [Segments.HEADERS]: Joi.object({
      authorization: Joi.string().required(),
    }).unknown(),
  }),
  Profile.index
);

routes.get(
  "/incidents",
  celebrate({
    [Segments.QUERY]: Joi.object().keys({
      page: Joi.number(),
    }),
  }),
  Incident.index
);
routes.post("/incidents", Incident.create);
routes.delete(
  "/incidents/:id",
  celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      id: Joi.number().required(),
    }),
  }),
  Incident.delete
);

module.exports = routes;
