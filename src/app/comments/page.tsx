"use client";

import { useState } from "react";
import styles from "./style.module.css";
import CommentBox from "../../components/commentBox";

const Comments = () => {
  const [comments, setComments] = useState<any>([
    {
      value: "hello",
      replies: [
        { value: "hello reply1", replies: [], id: 2 },
        { value: "hello reply2", replies: [], id: 3 },
      ],
      id: 1,
    },
  ]);

  const handleInput = (e: any) => {
    if (e.keyCode == 13 && e.target.value) {
      setComments([
        ...comments,
        { value: e.target.value, replies: [], id: Date.now() },
      ]);
    }
  };

  const addReplyHandler = (
    commentArray: any[],
    parentId: any,
    value: string
  ) => {
    return commentArray.map((comment: any) => {
      if (comment.id === parentId) {
        return {
          ...comment,
          replies: [...comment.replies, { value, replies: [], id: Date.now() }],
        };
      } else {
        comment.replies = addReplyHandler(comment.replies, parentId, value);
        return { ...comment };
      }
    });
  };

  const addReply = (parentId: any, value: string) => {
    const result = addReplyHandler(comments, parentId, value);
    setComments(result);
  };
  return (
    <div className={styles.pageWrapper}>
      <input type="text" onKeyDown={handleInput} className={styles.mainInput} />

      <div className={styles.commentContainer}>
        {comments.map((comment: any) => (
          <CommentBox {...comment} addReply={addReply} key={comment.id}/>
        ))}
      </div>
    </div>
  );
};

export default Comments;
