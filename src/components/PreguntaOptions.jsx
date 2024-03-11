/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useRef, useEffect } from "react";
import OptionItem from "./OptionItem";

const PreguntaOptions = ({
  setRefCont1,
  setRefCont2,
  setRefCont3,
  setRefCont4,
  handleRevolver,
  opciones,
  respuesta,
  p
}) => {
  const refCont1 = useRef();
  const refCont2 = useRef();
  const refCont3 = useRef();
  const refCont4 = useRef();

  useEffect(() => {
    setRefCont1(refCont1);
    setRefCont2(refCont2);
    setRefCont3(refCont3);
    setRefCont4(refCont4);
  }, []);

  const handle = (r) => {
    handleRevolver(r, respuesta, p);
  };

  return (
    <div className="grid grid-cols-2 mx-auto w-5/6 h-1/4 gap-5">
      <OptionItem
        option={opciones[0]}
        r={refCont1}
        handle={handle}
        letter={"A"}
      />

      <OptionItem
        option={opciones[1]}
        r={refCont2}
        handle={handle}
        letter={"B"}
      />

      <OptionItem
        option={opciones[2]}
        r={refCont3}
        handle={handle}
        letter={"C"}
      />

      <OptionItem
        option={opciones[3]}
        r={refCont4}
        handle={handle}
        letter={"D"}
      />
    </div>
  );
};

export default PreguntaOptions;
