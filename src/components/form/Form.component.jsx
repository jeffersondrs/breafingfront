import "./form.styles.scss";
import Button from "../button/Button.component";
import TextArea from "../inputs/TextArea.component";
import Labels from "../label/Label.componet";
import axios from "axios";
import titulos from "./../../database/titulos.json";
import { useState } from "react";

export default function Form() {
  const [questions, setQuestions] = useState({
    title: "",
    answer: "",
  });
  
  const handleInputChange = (e) => {
    setQuestions({
      title: e.target.name,
      answer: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://127.0.0.1:3002/api/breafing", questions)
      .then((response) => {
        console.log(response);
      })
      .catch((errors) => {
        console.log(errors);
      });
  };

  return (
    <>
      <form
        method="POST"
        action="http://127.0.0.1:3002/api/breafing"
        className="w-full flex flex-col justify-center items-center p-10"
      >
        <div className="flex flex-row justify-evenly items-center flex-wrap">
          {titulos.map((quest) => {
            return (
              <div className="w-[600px] h-[400px] my-5 p-5 flex flex-col justify-evenly items-center card">
                <Labels text={quest.title} key={quest.id} />
                <TextArea
                  maxHeight={200}
                  maxLength={200}
                  onChange={handleInputChange}
                  placeholder="Responda aqui com o máximo de detalhes possíveis."
                  key={quest.title}
                  id={quest.id}
                  name={quest.title}
                />
              </div>
            );
          })}
        </div>
        <button
          onClick={handleSubmit}
          className="bg-blue-500 hover:bg-blue-700 text-2xl text-white font-bold py-2 px-4 rounded w-40 h-12 m-5 ease-in-out duration-500 transform hover:-translate-y-1 hover:scale-105"
        >Enviar</button>
      </form>
      
    </>
  );
}
