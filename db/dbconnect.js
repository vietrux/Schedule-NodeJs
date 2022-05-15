const mongoose = require("mongoose");
async function connect() {
  try {
    await mongoose.connect( process.env.MONGO_DB ||
      "MONGO_DB", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    console.log("Connected to mongodb successfully");
    return mongoose;
  } catch (e) {
    console.log(e);
  }
}
module.exports = connect;