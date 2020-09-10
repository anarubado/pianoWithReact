import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [estaSonando, setEstaSonando] = useState(null);

  const notes = [
    {
      name: "Do",
      link: require("./notes/do.wav"),
      sharp: true
    },
    {
      name: "Re",
      link: require("./notes/re.wav"),
      sharp: true
    },
    {
      name: "Mi",
      link: require("./notes/mi.wav")
    },
    {
      name: "Fa",
      link: require("./notes/fa.wav"),
      sharp: true
    },
    {
      name: "Sol",
      link: require("./notes/sol.wav"),
      sharp: true
    },
    {
      name: "La",
      link: require("./notes/la.wav"),
      sharp: true
    },
    {
      name: "Si",
      link: require("./notes/si.wav")
    }
  ];

  const handleClick = (note) => {
    const audio = new Audio(note.link);
    audio.play();

    setTimeout(() => {
      setEstaSonando("");
    }, 150);
  };
  return (
    <div className="App">
      <div className="container">
        {notes.map((note) => {
          return (
            <div
              className={`nota ${estaSonando === note.name ? "estaSonando" : ""}`}
              onClick={() => handleClick(note)}
            >
              {note.sharp ? <div className="nota-negra"></div> : ""}
            </div>
          );
        })}
      </div>
    </div>
  );
}
