import PreguntaEnunciado from "./PreguntaEnunciado";
import PreguntaOptions from "./PreguntaOptions";
import Road from "./Road";

/* eslint-disable react/prop-types */
const PreguntaLayout = ({
  preguntas,
  pregunta,
  road,
  handleRevolver,
  setRefCont1,
  setRefCont2,
  setRefCont3,
  setRefCont4,
}) => {
  return (
    <div
      key={pregunta._id}
      className="pb-10 w-screen h-3/4 flex z-10 flex-col gap-3"
    >
      <Road road={road} />
      <PreguntaEnunciado pregunta={pregunta.pregunta} />

      <PreguntaOptions
        setRefCont1={setRefCont1}
        setRefCont2={setRefCont2}
        setRefCont3={setRefCont3}
        setRefCont4={setRefCont4}
        opciones={pregunta.opciones}
        handleRevolver={handleRevolver}
        respuesta={pregunta.respuesta}
        p={preguntas}
      />
    </div>
  );
};

export default PreguntaLayout;
