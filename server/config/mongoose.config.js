const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/persondb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Config: Connection established to Database!"))
    .catch(error => console.log("ERROR:", error));