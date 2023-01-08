import { useState } from "react";
import "./App.css";

function ImageSelector() {
  const fileTypes = "image/jpeg,image/jpg,image/svg,image/png,image/webp";
  const [uploadedFiles, setUploadedFiles] = useState([])

  return (
        <input id="inputTag" type="file" multiple accept={fileTypes} className="image-uploader" onChange={(e)=>{
          console.log(e.target.files)
        }}/>
  );
}

export default ImageSelector;
