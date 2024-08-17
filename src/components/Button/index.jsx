import styles from "./style.module.css";

export default function Button(props) {
  return (
    <>
      <button className={styles.wrapperBtn} onClick={props.onClick}>
        {props.description}
      </button>
    </>
  );
}

