import { useState } from "react";
import styles from "./styles.module.css";

const CommentBox = (props: any) => {
  const [showInput, setShowInput] = useState<boolean>(false);

  const handleReply = () => {
    setShowInput(true);
  };

  const inputHandler = (e: any) => {
    if (e.keyCode == 13 && e.target.value) {
      props.addReply(props.id, e.target.value);
      setShowInput(false);
    }
  };

  return (
    <div>
      <div className={styles.commentContainer}>
        <div>{props.value}</div>
        <button className={styles.button} onClick={handleReply}>
          Reply
        </button>
      </div>
      {showInput && (
        <input
          type="text"
          className={styles.commentInput}
          autoFocus
          onBlur={() => {
            setShowInput(false);
          }}
          onKeyDown={inputHandler}
        />
      )}
      <div className={styles.repliesContainer}>
        {props.replies.map((reply: any) => (
          <CommentBox {...reply} addReply={props.addReply} />
        ))}
      </div>
    </div>
  );
};

export default CommentBox;
