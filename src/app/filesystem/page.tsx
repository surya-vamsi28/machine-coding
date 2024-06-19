"use client";
import { useState } from "react";
import styles from "./styles.module.css";
import File from "../../components/file";

const FileSystem = () => {
  const [fileData, setFileData] = useState<any>({
    id: 1,
    name: "Root",
    isFolder: true,
    files: [],
  });

  const addFiles = (
    fileDetails: any,
    target: any,
    values: any,
    isFolder: any
  ) => {
    if (fileDetails.id === target) {
      return {
        ...fileDetails,
        files: [
          { id: Date.now(), name: values, isFolder, files: [] },
          ...fileDetails.files,
        ],
      };
    } else {
      const files = fileDetails.files.map((ele: any) =>
        addFiles(ele, target, values, isFolder)
      );
      return { ...fileDetails, files };
    }
  };

  const createFileHandler = (target: any, values: any, isFolder: any) => {
    const result = addFiles(fileData, target, values, isFolder);

    setFileData(result);
  };

  console.log("!@#", fileData);

  return (
    <div className={styles.pageWrapper}>
      <File fileData={fileData} createFileHandler={createFileHandler} />
    </div>
  );
};

export default FileSystem;
