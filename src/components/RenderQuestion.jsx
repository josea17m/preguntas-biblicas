/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "./Layout.jsx";
import PreguntaLayout from "./PreguntaLayout.jsx";
import RoadPanel from "./RoadPanel.jsx";

const RenderQuestion = ({
  questionsEasy,
  questionsMedium,
  questionsHard,
  handlePlay,
  road,
  setRoad,
  name,
}) => {
  const [refCont1, setRefCont1] = useState();
  const [refCont2, setRefCont2] = useState();
  const [refCont3, setRefCont3] = useState();
  const [refCont4, setRefCont4] = useState();
  const [buttonHome, setButtonHome] = useState(false);
  const [todo, setTodo] = useState([0]);

  const [preguntasStateEasy, setPreguntasStateEasy] = useState([]);
  const [preguntasStateMedium, setPreguntasStateMedium] = useState([]);
  const [preguntasStateHard, setPreguntasStateHard] = useState([]);

  const [roadPanel, setRoadPanel] = useState(false);

  // useEffect(() => {
  //   const p = cincoPreguntas(questionsMedium);
  //   setPreguntasStateMedium(p);
  // }, [questionsMedium]);

  // useEffect(()=>{
  //   alert("El diseño es muy sencillo, si quieres algo mejor, pagame :)");
  // }, [])

  function cincoPreguntas(data) {
    return [...data].sort(() => (Math.random() > 0.5 ? 1 : -1)).slice(0, 5);
  }

  // Preguntas
  useEffect(() => {
    shuffle(questionsEasy);
    const pe = cincoPreguntas(questionsEasy);
    setPreguntasStateEasy(pe);

    shuffle(questionsHard);
    const ph = cincoPreguntas(questionsHard);
    setPreguntasStateHard(ph);

    mezcla(preguntasStateEasy, preguntasStateHard);
  }, [questionsHard, questionsEasy]);

  const mezcla = (a1, a2) => {
    const all = [a1, a2];
    setTodo(all);
  };

  // Preguntas Aleatorias
  function shuffle(array) {
    let currentIndex = array.length,
      randomIndex;

    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }

  // Cambiar pregunta
  const cambiarPregunta = (perdio, preguntasArray) => {
    if (perdio) {
      setButtonHome(true);
      setRoad(0);
      return;
    } else {
      setTimeout(() => {
        handlePlay();
        setTimeout(() => {
          preguntasArray.shift();
          setRoad(road + 1);
        }, 100);
      }, 2000);
    }
  };

  // Resolver
  const handleRevolver = (r, respuesta, preguntasArray) => {
    // Espera
    r.current.style.background = "gray";
    // Respuesta correcta
    if (respuesta === r.current.outerText) {
      setTimeout(() => {
        r.current.style.background = "green";
        cambiarPregunta(false, preguntasArray);
      }, 2000);

      //No es correcta
    } else {
      // Marcarla como error
      setTimeout(() => {
        r.current.style.background = "red";
      }, 2000);

      //Opcion 1 es correcta
      if (refCont1.current.outerText === respuesta) {
        setTimeout(() => {
          refCont1.current.style.background = "green";
          cambiarPregunta(true);
        }, 2000);
        return;
      }

      //Opcion 2 es correcta
      if (refCont2.current.outerText === respuesta) {
        setTimeout(() => {
          refCont2.current.style.background = "green";
          cambiarPregunta(true);
        }, 2000);
        return;
      }

      //Opcion 3 es correcta
      if (refCont3.current.outerText === respuesta) {
        setTimeout(() => {
          refCont3.current.style.background = "green";
          cambiarPregunta(true);
        }, 2000);
        return;
      }

      //Opcion 4 es correcta
      if (refCont4.current.outerText === respuesta) {
        setTimeout(() => {
          refCont4.current.style.background = "green";
          cambiarPregunta(true);
        }, 2000);
        return;
      }
    }
  };

  // useEffect(() => {
  //   if (!preguntasStateEasy.length > 0) {
  //     console.log("se acabo");
  //     return
  //   }
  //   console.log(preguntasStateEasy);

  // }, []);

  return (
    <Layout>
      <Link
        to="/"
        className={`${
          buttonHome ? "absolute" : "hidden"
        } top-10 flex items-center justify-center w-60 h-60 rounded-2xl left-40 bg-[#f82222] z-20`}
      >
        {" "}
        <div> Perdiste, vuelve al home</div>
      </Link>

      {preguntasStateEasy.length > 0 ? (
        <>
          <button
            className="absolute top-0 left-0 bg-black text-white z-20"
            onClick={() => setRoadPanel(!roadPanel)}
          >
            Camino
          </button>
          <PreguntaLayout
            pregunta={preguntasStateEasy[0]}
            preguntas={preguntasStateEasy}
            setRefCont1={setRefCont1}
            setRefCont2={setRefCont2}
            setRefCont3={setRefCont3}
            setRefCont4={setRefCont4}
            road={road}
            handleRevolver={handleRevolver}
          />
          <RoadPanel roadPanel={roadPanel} road={road} />
        </>
      ) : (
        <div className="w-screen h-screen flex justify-center items-center">
          <h1 className="font-bold text-lg">Cargando...</h1>
        </div>
      )}
    </Layout>
  );
};

export default RenderQuestion;
