import React, { useState } from "react";
import "./styles.css";

export default function App() {

  const [isSounding, setIsSounding] = useState(null);

  const notes = [
    {
      name: "Do",
      link: require("./notes/C.mp3"),
      key: "white"
    },
    {
      name: "Do# / Reb",
      link: require("./notes/CSharp.mp3"),
      key: "black"
    },      
    {
      name: "Re",
      link: require("./notes/D.mp3"),
      key: "white"
    },
    {
      name: "Re# / Mib",
      link: require("./notes/DSharp.mp3"),
      key: "black"
    },
    {
      name: "Mi",
      link: require("./notes/E.mp3"),
      key: "white"
    },
    {
      name: "Fa",
      link: require("./notes/F.mp3"),
      key: "white"
    },
    {
      name: "Fa# / Solb",
      link: require("./notes/FSharp.mp3"),
      key: "black"
    },
    {
      name: "Sol",
      link: require("./notes/G.mp3"),
      key: "white"
    },
    {
      name: "Sol# / Lab",
      link: require("./notes/GSharp.mp3"),
      key: "black"
    },
    {
      name: "La",
      link: require("./notes/A.mp3"),
      key: "white"
    },
    {
      name: "La# / Sib",
      link: require("./notes/ASharp.mp3"),
      key: "black"
    },
    {
      name: "Si",
      link: require("./notes/B.mp3"),
      key: "white"
    }
  ];

  const handleClick = (note) => {
    setIsSounding(note.name);
    const audio = new Audio(note.link);
    audio.play();
    setTimeout(() => {
      setIsSounding(null);
    }, 300);
  };

  return (
    <div className="App">

      <div className="title">
        <h1>Piano con React</h1>
        <h2>Hecho con Ada</h2>
        {
          isSounding && <h3>Está sonando la nota { isSounding }</h3>
        }        
      </div>

      <span className="container">

        {notes.map((note, idx) => {
          return (
            <div className={`${note.key === "white" ? "white" : "black"} 
            ${isSounding === note.name ? "isSounding" : ""}`} 
            onClick={() => handleClick(note)} key={idx}>
            </div>
          );
        })}

      </span>
    </div>
  );
}
