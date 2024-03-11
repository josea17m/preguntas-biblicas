import mongoose from "mongoose";

const preguntasSchema = mongoose.Schema({
  _id:{
    type: String,
  },
  pregunta: {
    type: String,
  },
  texto:{
    type: String,
  },
  dificultad: {
    type: String,
    enum:["easy", "medium", "hard"]
  },
  repuesta: {
    type: String,
  },
  respuesta: {
    type: String,
  },
  opciones: [
    {
      type: String,
    },
  ],
});

const Preguntas = mongoose.model("preguntas", preguntasSchema);

export default Preguntas;
