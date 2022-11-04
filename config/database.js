const mongoose = require("mongoose")
mongoose.Promise = global.Promise

mongoose.connect ("mongodb://localhost/javascriptNote", {

}).then (() => console.log("Connection successful"))
.catch((err) => console.log(err))

//PORT=3001 npx nodemon