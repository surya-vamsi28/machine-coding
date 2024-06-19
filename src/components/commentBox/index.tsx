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

  const handlePrompt = () => {
    const input = window.prompt('Please enter the updated Comment:', props.value);
    if (input !== null) {
      props.updateComment(props.id, input)
    }
  };

  return (
    <div>
      <div className={styles.commentContainer}>
        <div>{props.value}</div>
        <div className={styles.buttomWrapper}>
        <div className={styles.button} onClick={handleReply}>
          Reply
        </div>
        <div className={styles.button} onClick={handlePrompt}>
          Update
        </div>
        </div>
        
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
          <CommentBox {...reply} addReply={props.addReply} key={reply.id} updateComment={props.updateComment}/>
        ))}
      </div>
    </div>
  );
};

export default CommentBox;
