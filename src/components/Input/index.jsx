import styles from "./style.module.css";

export default function Input(props) {

  return (
    <>
      <input
        className={styles.wrapper}
        type="number"
        id="passwordSize"
        min={1}
        max={20}
        value={props.value}
        onChange={e => props.setPasswordSize(e.target.value)}
        // onChange={e => setPasswordSize(e.target.value)}
        // onChange={SizePassword}
      />
    </>
  );
}
