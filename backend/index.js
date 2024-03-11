/* eslint-disable no-unused-vars */
import express from "express";
import preguntasRoutes from "./routes/preguntasRoutes.js";
import conectarDB from "./config/db.js";
import cors from "cors";

const app = express();
app.use(express.json());
conectarDB();

const whiteList = ["http://127.0.0.1:5173", "http://localhost:5173"];

const corsOptions = {
  origin: function (origin, callback) {
    if (whiteList.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Origin is not allowed"));
    }
  },
};

app.use(cors(corsOptions));

app.use("/", preguntasRoutes);

app.listen(4000, () => {
  console.log(`Servidor corriendo en: ${4000}`);
});
