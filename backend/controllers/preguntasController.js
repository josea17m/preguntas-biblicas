import Preguntas from "../model/Preguntas.js";

const obtenerPreguntasPorDificultad = async (req, res) => {
  const pregunta = await Preguntas.find({
    dificultad: req.params.dificultad,
  }).exec();
  try {
    res.json(pregunta);
  } catch (error) {
    res.status(404).json(error.message);
  }
};

const obtenerTodasLasPreguntas = async (req, res) => {
  const pregunta = await Preguntas.find({}).exec();
  try {
    res.json(pregunta);
  } catch (error) {
    res.status(404).json(error.message);
  }
};

export { obtenerPreguntasPorDificultad, obtenerTodasLasPreguntas };
