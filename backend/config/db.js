/* eslint-disable no-undef */
import mongoose from "mongoose";

const conectarDB = async () => {
  try {
    const connection = await mongoose.connect("mongodb+srv://josea17m:rrBG11Oh65ayqY5j@preguntas-biblicas-db.3ky5qdk.mongodb.net/?retryWrites=true&w=majority", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    const url = `${connection.connection.host}:${connection.connection.port}`;
    console.log(`Mongo DB conectado en: ${url}`);
  } catch (error) {
    console.log(`error: ${error.message}`); 
    process.exit(1);
  }
};

export default conectarDB;