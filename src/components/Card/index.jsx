import styles from "./style.module.css";
import Button from "../Button";
import { useState } from "react";

export default function Card(props) {
  const [password, setPassword] = useState();
  const [copyText, setCopyText] = useState("Copiar");

  function createPassword() {
    const character =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+{}:<>?|[];',./`~";
    let newPassword = "";

    for (let i = 0; i < 12; i++) {
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
          <Button description="Gerar!" onClick={createPassword}></Button>
          <Button description={copyText} onClick={copyPassword}></Button>
        </div>
        <div className="wrapperResult">{password}</div>
      </div>
    </>
  );
}
