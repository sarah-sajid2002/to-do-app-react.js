import React, { useState } from "react";
import "./todoapp.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt, faTrash } from "@fortawesome/free-solid-svg-icons";

const ToDoApp = () => {
  const [list, setList] = useState([]);
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  function addToDo() {
    if (input.trim() !== "") {
      setList([...list, input]);
      setInput("");
      setError("");
    } else {
      setError("Enter something first");
    }
  }

  function deleteFunction(index) {
    setList((prevList) => prevList.filter((_, i) => i !== index));
  }

  console.log(list);
  return (
    <div className="mainDiv">
      <div className="error">{error}</div>
      <header>
        <input
          type="text"
          placeholder="Add Item"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={addToDo}>Add</button>
      </header>
      <div className="bodyDiv">
        {list.map((item, index) => (
          <div className="mainTodoList" key={index}>
            <div className="listItems">
              {index + 1}) {item}
            </div>
            <div className="icons">
              <FontAwesomeIcon
                className="icon-icon"
                icon={faTrash}
                color="red"
                onClick={() => deleteFunction(index)}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToDoApp;
