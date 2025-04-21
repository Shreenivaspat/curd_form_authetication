const mongoose = require("mongoose");

const mongo_url = process.env.DBURL;

mongoose
  .connect(mongo_url)
  .then(() => {
    console.log("server is connected");
  })
  .catch((error) => {
    console.log("connected error", error);
  });
