import styles from "./styles.module.css";

const Modal = (props: any) => {
  return (
    <>
      {props.isOpen ? (
        <div className={styles.modalContainer}>
          <div className={styles.modal}>
            <div className={styles.crossButton} onClick={props.onClose}>
              X
            </div>
            {props.children}
          </div>
        </div>
      ) : null}
    </>
  );
};
export default Modal;
