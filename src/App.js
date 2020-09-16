import React, { useState } from "react";
import "./styles.css";

export default function App() {

  const [isSounding, setIsSounding] = useState(null);

  const notes = [
    {
      name: "Do3",
      link: require("./notes/c3.mp3"),
      key: "white"
    },
    {
      name: "Do#3 / Reb3",
      link: require("./notes/c-3.mp3"),
      key: "black"
    },      
    {
      name: "Re3",
      link: require("./notes/d3.mp3"),
      key: "white"
    },
    {
      name: "Re#3 / Mib3",
      link: require("./notes/d-3.mp3"),
      key: "black"
    },
    {
      name: "Mi3",
      link: require("./notes/e3.mp3"),
      key: "white"
    },
    {
      name: "Fa3",
      link: require("./notes/f3.mp3"),
      key: "white"
    },
    {
      name: "Fa#3 / Solb3",
      link: require("./notes/f-3.mp3"),
      key: "black"
    },
    {
      name: "Sol3",
      link: require("./notes/g3.mp3"),
      key: "white"
    },
    {
      name: "Sol#3 / Lab3",
      link: require("./notes/g-3.mp3"),
      key: "black"
    },
    {
      name: "La4",
      link: require("./notes/a4.mp3"),
      key: "white"
    },
    {
      name: "La#4 / Sib4",
      link: require("./notes/a-4.mp3"),
      key: "black"
    },
    {
      name: "Si4",
      link: require("./notes/b4.mp3"),
      key: "white"
    },
    {
      name: "Do4",
      link: require("./notes/c4.mp3"),
      key: "white"
    },
    {
      name: "Do#4 / Reb4",
      link: require("./notes/c-4.mp3"),
      key: "black"
    },      
    {
      name: "Re4",
      link: require("./notes/d4.mp3"),
      key: "white"
    },
    {
      name: "Re#4 / Mib4",
      link: require("./notes/d-4.mp3"),
      key: "black"
    },
    {
      name: "Mi4",
      link: require("./notes/e4.mp3"),
      key: "white"
    },
    {
      name: "Fa4",
      link: require("./notes/f4.mp3"),
      key: "white"
    },
    {
      name: "Fa#4 / Solb4",
      link: require("./notes/f-4.mp3"),
      key: "black"
    },
    {
      name: "Sol4",
      link: require("./notes/g4.mp3"),
      key: "white"
    },
    {
      name: "Sol#4 / Lab4",
      link: require("./notes/g-4.mp3"),
      key: "black"
    },
    {
      name: "La5",
      link: require("./notes/a5.mp3"),
      key: "white"
    },
    {
      name: "La#5 / Sib5",
      link: require("./notes/a-5.mp3"),
      key: "black"
    },
    {
      name: "Si5",
      link: require("./notes/b5.mp3"),
      key: "white"
    },
    {
      name: "Do5",
      link: require("./notes/c5.mp3"),
      key: "white"
    },
    {
      name: "Do#5",
      link: require("./notes/c-5.mp3"),
      key: "black"
    },
    {
      name: "Re5",
      link: require("./notes/d5.mp3"),
      key: "white"
    },
    {
      name: "Re#5 / Mib5",
      link: require("./notes/d-5.mp3"),
      key: "black"
    },
    {
      name: "Mi5",
      link: require("./notes/e5.mp3"),
      key: "white"
    }

  ];

  const keys = ["q", "2", "w", "3", "e", "r", "5", "t", "6", "y", "7", "u", "i", "9", "o", "0", "p", "z", "s", "x", "d", "c", "f", "v", "b", "h", "n", "j", "m"]

  const play = (note) => {
    setIsSounding(note.name);
    const audio = new Audio(note.link);
    audio.play();
    setTimeout(() => {
      setIsSounding(null);
    }, 200);
  };

  const handleKeyDown = (key) => {    
    let keyIndex = keys.indexOf(key);
    if (keyIndex > -1){
      play(notes[keyIndex]);
    }
  };

  return (
    <div className="App">

      <div className="title">
        <span>Piano con <a href="https://reactjs.org/" className="react">React</a></span>
        <span>Hecho por Ani con las chicas de <a href="https://adaitw.org/" className="ada"> Ada</a></span>
        {
          isSounding && <span>Está sonando la nota { isSounding }</span>
        }        
      </div>

      <div className="container">

        {notes.map((note, idx) => {
          return (
            <div className={`${note.key === "white" ? "white" : "black"} 
            ${isSounding === note.name ? "isSounding" : ""}`} 
            onClick={() => play(note)} key={idx}
            onKeyDown={(e) => handleKeyDown(e.key)} tabIndex="0">{/* e.key shows the exact letter of the key that was pressed. Use tabIndex attribute to be able to listen onKeyDown event on a div in React. */}

            </div>
          );
        })}

      </div>
    </div>
  );
}
