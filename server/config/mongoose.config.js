const mongoose = require("mongoose");
mongoose.connect("http://localhost:8000/persondb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Config: Connection established to Database!"))
    .catch(error => console("ERROR:", error));