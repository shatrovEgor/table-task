import React from "react";
import { useDispatch } from "react-redux";
import { addRow } from "../reducer";
import './StylesFileInput.css';
import { FileInputContainer } from "./_styles";
import { useSelector } from "react-redux";

const FileInput = () => {
    const locale = useSelector((state) => state.dictionary.locale);
    let dictionary = useSelector((state) => state.dictionary);
    dictionary = dictionary[`${locale}`];

    const dispatch = useDispatch();

    function readFile(input) {
        let file = input.target.files[0];
        let reader = new FileReader();
      
        reader.readAsText(file);
      
        reader.onload = function() {
          console.log(JSON.parse(reader.result));
          dispatch(addRow(JSON.parse(reader.result)));
        };
      
        reader.onerror = function() {
          console.log(reader.error);
        };  
    }


    return (
        <FileInputContainer>
            <label htmlFor="myfile" className="label">{dictionary.pickFile}</label>
            <input type="file" className="my" id="myfile" name="myfile" onChange={readFile}/>
        </FileInputContainer>
    )
}

export default FileInput;