const { request, response } = require("express");
const { model, models } = require("mongoose");
const { Person } = require("../models/person.model");

module.exports.index = (request, response) => {
    response.json({
        message: "HELLO WORLD!!!"
    });
}

module.exports.createPerson = (request, response) => {
    const { firstName, lastName } = request.body;
    Person.create({
        firstName,
        lastName
    })
        .then(person => response.json(person))
        .catch(error => response.json(error));
}