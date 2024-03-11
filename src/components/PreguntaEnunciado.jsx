/* eslint-disable react/prop-types */

const PreguntaEnunciado = ({ pregunta }) => {
  return (
    <div className="bg-[#2549ac] flex items-center w-full h-1/2">
      <p className="text-white block w-full h-auto">{pregunta}</p>
    </div>
  );
};

export default PreguntaEnunciado;
