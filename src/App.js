//import React, { Component } from "react";
import "./App.css";
import SampleItem from "./components/SampleItem";
import cat from "./images/cat.gif";
import React, { useEffect, useState } from "react";
// import strawberry from "./images/strawberry.png";

const App = () => {
  const [toDoList, setToDoList] = useState([]);
  const [toDo, setToDo] = useState("");

  const handleToDo = (event) => {
    const { value } = event.target;
    setToDo(value);
  };
  const submit = () => {
    const list = toDoList;
    const newItem = {
      id: 1 + Math.random(),
      value: toDo,
    };
    if (newItem.value && !toDoList.includes(newItem.value)) {
      list.push(newItem);
      setToDoList([...list]);
    }
  };

  const deleteItem = (id) => {
    setToDoList((list) => list.filter((item) => item.id !== id));
  };

  return (
    <div>
      <h1 className="app-title">
        <img src={cat} width="100" height="100" alt="cat" />
        To Do List
        <img src={cat} width="100" height="100" alt="cat2" />
      </h1>
      <center>
        <SampleItem name="Monica"></SampleItem>
        {/* <img src={strawberry} /> */}
      </center>
      <div className="container">
        <div
          style={{
            padding: 100,
            textAlign: "center",
            maxWidth: 500,
            margin: "auto",
          }}
        >
          Add an Item
          <br />
          <input
            type="text"
            placeholder="Type item here..."
            onChange={handleToDo}
          />
          <button className="add-btn btn-floating" onClick={submit}>
            <i class="material-icons"> + </i>
          </button>
          <br />
          <ul>
            {toDoList.map((item, index) => {
              return (
                <li key={index}>
                  {item.value}
                  <button onClick={() => deleteItem(item.id)}>
                    <i class="material-icons">x</i>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
  //}
};

//default export
export default App;
