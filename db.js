import {MongoClient} from "mongodb";
import dotenv from "dotenv";

dotenv.config();
let dbConn;
const dbURL =
  "mongodb+srv://sachin:8382sachin@cluster0.lspty.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

export const connectDB = (callback) => {
  MongoClient.connect(dbURL)
    .then((client) => {
      dbConn = client.db();
      console.log("Database Connected");
      return callback();
    })
    .catch((err) => {
      console.log(err);
      return callback(err);
    });
};

export const dbConnection = () => {
  return dbConn;
};
export const closeConnection = () => {
  dbConn.close();
};
