import { useState } from "react";
import styles from "./styles.module.css";

const File = ({ fileData, createFileHandler }: any) => {
  const [showChildren, setShowChildren] = useState<boolean>(false);

  const addFileHandler = () => {
    const input = window.prompt("please enter the fileName");
    if (input !== null) {
      createFileHandler(fileData.id, input, false);
    }
    setShowChildren(true);
  };

  const addFolderHandler = () => {
    const input = window.prompt("please enter the fileName");
    if (input !== null) {
      createFileHandler(fileData.id, input, true);
    }
    setShowChildren(true);
  };

  return (
    <div className={styles.folderWrapper}>
      <div className={styles.detailsWrapper}>
        <div
          className={styles.fileName}
          onClick={() => {
            fileData.isFolder && setShowChildren(!showChildren);
          }}
        >
          {fileData.isFolder ? "📁" : "📄"} {fileData.name}
        </div>

        {fileData.isFolder && (<div className={styles.buttonWrapper}>
          <div className={styles.button} onClick={addFileHandler}>
            add file
          </div>
          <div className={styles.button} onClick={addFolderHandler}>
            add folder
          </div>
        </div>)}
      </div>
      {showChildren && fileData.files.length ? (
        <div className={styles.filesWrapper}>
          {fileData.files.map((ele: any) => {
            return (
              <File
                key={ele.id}
                fileData={ele}
                createFileHandler={createFileHandler}
              />
            );
          })}
        </div>
      ) : null}
    </div>
  );
};

export default File;
