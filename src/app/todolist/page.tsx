"use client";
import styles from "./styles.module.css";
import plusIcon from "../../../public/assests/plusIcon.svg";
import deleteIcon from "../../../public/assests/deleteIcon.svg";
import editIcon from "../../../public/assests/whiteEditIcon.svg";
import tickIcon from "../../../public/assests/tick.svg";
import Image from "next/image";
import { useState } from "react";
import { removeElementFromArray, removeItemFromArray } from "@/utils/utils";
import Head from "next/head";

const TodoList = () => {
  const [text, setText] = useState<string>("");
  const [pendingList, setPendingList] = useState<string[]>([
    "added a list1",
    "added a list2",
    "added a list3",
  ]);

  const [completedList, setCompletedList] = useState<string[]>(["Completed"]);

  const onInputChange = (e: any) => {
    setText(e.target.value);
  };

  const addPendingTask = () => {
    if (text) {
      setPendingList((prev) => [text, ...prev]);
      setText("");
    }
  };

  const deletePendingTask = (index: number) => {
    const Array = removeElementFromArray(pendingList, index);
    setPendingList(Array);
  };

  const editPendingTask = (text: string, index: number) => {
    deletePendingTask(index);
    setText(text);
  };

  const onCompletedTask = (text: string, index: number) => {
    deletePendingTask(index);
    setCompletedList((prev) => [text, ...prev]);
  };

  const onDragHandler = (e: any) => {
    setPendingList((prev) => {
      const tempArray = removeItemFromArray(prev, e.target.id);
      console.log('!@#', prev, tempArray)
      return tempArray;
    });
  };

  const onDropHandler = (e: any) => {
    console.log('!@# e', e)
    setCompletedList((prev) => {
      return [...prev, e.target.id]
    })
  }

  const dragStart = (event: any) => {
    event.dataTransfer.setData("Text", event.target.id);
  }

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.todoWrapper}>
        <div className={styles.inputWrapper}>
          <input
            type="text"
            className={styles.input}
            value={text}
            placeholder="Add a new task"
            onChange={onInputChange}
          />
          <Image
            src={plusIcon}
            alt="icon"
            className={styles.addIcon}
            onClick={addPendingTask}
          />
        </div>
        <div className={styles.remainingWrapper}>
          <div
            className={styles.remainingTitle}
          >{`Tasks to do - ${pendingList.length}`}</div>

          {pendingList.map((item, index) => (
            <div className={styles.remainingListItem} key={index}>
              <div
                className={styles.remainingItem}
                // draggable={true}
                // onDragStart={dragStart}
                // onDragEnd={onDragHandler}
                id={item}
              >
                {item}
              </div>

              <Image
                src={tickIcon}
                className={styles.deleteIcon}
                alt="tick"
                onClick={() => onCompletedTask(item, index)}
              />
              <Image
                src={editIcon}
                alt="delete"
                className={styles.editIcon}
                onClick={() => {
                  editPendingTask(item, index);
                }}
              />
              <Image
                src={deleteIcon}
                alt="delete"
                className={styles.deleteIcon}
                onClick={() => deletePendingTask(index)}
              />
            </div>
          ))}
        </div>
        <div className={styles.completedWrapper} >
          <div
            className={styles.completedTitle}
          >{`Done - ${completedList.length}`}</div>
          {completedList.map((item, index) => (
            <div className={styles.remainingListItem} key={index} >
              <div className={styles.completedtem}>{item}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodoList;
