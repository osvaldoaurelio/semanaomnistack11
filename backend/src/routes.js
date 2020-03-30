const express = require("express");
const Ong = require('./controllers/OngController')
const Incident = require('./controllers/IncidentController')
const Profile = require('./controllers/ProfileController')
const Session = require('./controllers/SessionController')

const routes = express.Router();

routes.post('/sessions', Session.create)

routes.get("/ongs", Ong.index)
routes.post("/ongs", Ong.create);

routes.get("/profile", Profile.index);

routes.get("/incidents", Incident.index)
routes.post("/incidents", Incident.create);
routes.delete("/incidents/:id", Incident.delete);

module.exports = routes;
