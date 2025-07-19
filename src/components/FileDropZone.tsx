import { open } from "@tauri-apps/plugin-dialog";
import { useState } from "react";

export function FileDropZone() {
  const [files, setFiles] = useState<string[]>([]);

  const openFileDialog = async () => {
    const selected = await open({
      multiple: true,
      directory: false,
      title: "Select file(s)",
    });

    if (typeof selected === "string") {
      setFiles([selected]);
    } else if (Array.isArray(selected)) {
      setFiles(selected);
    }
  };

  return (
    <>
      <ul>
        {files.map((file, i) => (
          <li key={i}>{file}</li>
        ))}
      </ul>
      <button onClick={openFileDialog}>Select File(s)</button>
    </>
  );
}
