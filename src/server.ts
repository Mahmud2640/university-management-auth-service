import mongoose from "mongoose";
import app from "./app";
import config from "./config/index";

async function connection() {
  try {
    await mongoose.connect(config.database_url as string),
      console.log("Connect successfully!!!");
    app.listen(config.port, () => {
      console.log(`Application app listening on port ${config.port}`);
    });
  } catch (err) {
    console.log("Connect failure!!!", err);
  }
}

connection();
