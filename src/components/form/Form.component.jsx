import "./form.styles.scss";
import Button from "../button/Button.component";
import TextArea from "../inputs/TextArea.component";
import Labels from "../label/Label.componet";
import axios from "axios";
import titulos from "./../../database/titulos.json";
import { useEffect, useState } from "react";

export default function Form() {


  return (
    <>
      <form
        className="w-full flex flex-col justify-center items-center p-10 bg-black"
        method="POST"
        action="http://127.0.0.1:3002/api/breafing"
      >
        <div className="flex flex-col">
          {titulos.map((title) => {
            return (
              <div className="w-[600px] h-[400px] m-1 p-5 bg-blue-400 flex flex-col justify-center items-center">
                <Labels text={title.title} key={title.id} />
                <TextArea
                  maxHeight={200}
                  maxLength={200}
                  placeholder="Olá mundo cruel"
                  id={title.id}
                />
              </div>
            );
          })}
        </div>
        <Button text={"Enviar"} />
      </form>
    </>
  );
}
