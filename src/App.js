import "bulma/css/bulma.css";
import "./App.css";
import { useState } from "react";
import AnimalShow from "./AnimalShow";

function getRandomAnimal() {
  const list = ["cow", "bird", "cat", "gator", "horse", "dog"];
  return list[Math.floor(Math.random() * list.length)];
}

function App() {
  const [animals, setAnimals] = useState([]);

  const handleClick = () => {
    setAnimals([...animals, getRandomAnimal()]);
  };

  /* 
    this is how you can create a new component every time an event occurs
    the map function creates the new component for every element in the animals array and returns it
  */
  const renderedAnimals = animals.map((animals, index) => {
    return <AnimalShow type={animals} key={index} />;
  });
  return (
    <div>
      <div className="app">
        <button onClick={handleClick}>Add animals</button>
      </div>
      <div className="animal-list">{renderedAnimals}</div>
    </div>
  );
}

export default App;
