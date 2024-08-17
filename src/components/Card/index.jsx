import styles from "./style.module.css";
import Button from "../Button";
import Input from "../Input";
import { useState } from "react";

export default function Card(props) {
  const [password, setPassword] = useState();
  const [copyText, setCopyText] = useState("Copiar");
  const [passwordSize, setPasswordSize] = useState(12);
  const [showInput, setShowInput] = useState(false);

  const size = showInput ? passwordSize : 8;

  function createPassword() {
    const character =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+{}:<>?|[];',./`~";
    let newPassword = "";

    for (let i = 0; i < passwordSize; i++) {
      const random = Math.floor(Math.random() * character.length);
      newPassword += character[random];
    }

    setPassword(newPassword);
    setCopyText("Copiar");
  }

  function copyPassword() {
    window.navigator.clipboard.writeText(password);
    setCopyText("Copiado!");
  }

  return (
    <>
      <div className={styles.wrapperCard}>
        <h1>{props.title}</h1>
        <div>
          <label htmlFor="customSize">Customizar Tamanho</label>
          <input
            type="checkbox"
            id="customSize"
            value={showInput}
            onChange={() => {
              setShowInput((currntState) => !currntState);
            }}
          />
        </div>
        {showInput ? (
          <div>
            <label htmlFor="passwordSize">Tamanho:</label>
            <Input
              value={passwordSize}
              setPasswordSize={setPasswordSize}
            ></Input>
          </div>
        ) : null}

        <div>
          <Button
            description={`Gerar senha de ${size} characteres`}
            onClick={createPassword}
          ></Button>
          <Button description={copyText} onClick={copyPassword}></Button>
        </div>
        <div className="wrapperResult">{password}</div>
      </div>
    </>
  );
}
