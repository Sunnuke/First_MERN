const PersonController = require("../controller/person.controller");

module.exports = (app) => {
    app.get("/api", PersonController.index);
    app.post("/api/person/new", PersonController.createPerson);
    app.get('/api/person', PersonController.getAllPeople);
    app.get('/api/person/:id', PersonController.getPerson);
}