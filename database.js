const mongoose = require("mongoose");

class Database {
  constructor() {
    this.connect();
  }
  connect() {
    mongoose
      .connect(
        "mongodb+srv://hamdy:lamasse123@twitterclonecluster.3wlv6.mongodb.net/TwitterCloneDB?retryWrites=true&w=majority"
      )
      .then(() => {
        console.log("database connection successful");
      })
      .catch((err) => {
        console.log("database connection error" + err);
      });
  }
}

module.exports = new Database();
