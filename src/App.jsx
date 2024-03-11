/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RenderQuestion from "./components/RenderQuestion";
import Home from "./components/Home";
import Modal from "./components/Modal";

function App() {
  const [data, setData] = useState([]);
  const [modal, setModal] = useState(false);
  const [name, setName] = useState("");

  const [questionsEasy, setQuestionsEasy] = useState([]);
  const [questionsMedium, setQuestionsMedium] = useState([]);
  const [questionsHard, setQuestionsHard] = useState([]);

  const [road, setRoad] = useState(1);

  const handlePlay = () => {
    // setModal(true);
    // setTimeout(() => {
    //   setModal(false);
    // }, 2000);
  };

  useEffect(() => {
    const handleAxios = async () => {
      try {
        const r = await axios("http://localhost:4000/easy");
        setQuestionsEasy(r.data);
      } catch (error) {
        console.log(error);
      }
    };
    handleAxios();
  }, []);

  useEffect(() => {
    const handleAxios = async () => {
      try {
        const r = await axios("http://localhost:4000/hard");
        setQuestionsHard(r.data);
      } catch (error) {
        console.log(error);
      }
    };
    handleAxios();
  }, []);

  return (
    <BrowserRouter>
      <Modal modal={modal} />
      <Routes>
        <Route
          path="/"
          element={<Home setName={setName} handlePlay={handlePlay} />}
        ></Route>
        <Route
          path="partida"
          element={
            <RenderQuestion
              name={name}
              questionsEasy={questionsEasy}
              questionsMedium={questionsMedium}
              questionsHard={questionsHard}
              handlePlay={handlePlay}
              setRoad={setRoad}
              road={road}
            />
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
