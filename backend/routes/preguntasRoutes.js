import express from "express";
import {
  obtenerPreguntasPorDificultad,
  obtenerTodasLasPreguntas,
} from "../controllers/preguntasController.js";

const router = express.Router();

router.get("/", obtenerTodasLasPreguntas);
router.get("/:dificultad", obtenerPreguntasPorDificultad);

export default router;
