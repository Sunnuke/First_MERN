const { request, response } = require("express");
const { model, models } = require("mongoose");

module.exports.index = (request, response) => {
    response.json({
        message: "HELLO WORLD!!!"
    });
}