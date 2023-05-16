import { useState } from "react";
import "./App.css";
import AppBar from "./components/AppBar";
import Button from "./components/Button";
import InputBox from "./components/InputBox";
import Oscar from "./components/Oscar";
import Person from "./components/Person";
import PersonList from "./components/PersonList";
import PlaceHolder from "./components/PlaceHolder";
import Status from "./components/Status";
import ContainerStyled from "./components/ContainerStyled";

function App() {
  const [val, setVal] = useState("");
  const person = {
    first: "John",
    last: "Doe",
  };
  const List = [
    {
      first: "Desai",
      last: "Hardik",
    },
    {
      first: "Kuldip",
      last: "Pandya",
    },
    {
      first: "Thomas",
      last: "Bhai",
    },
  ];
  return (
    <div className="App">
      <AppBar name="Home" />
      <Person person={person} />
      <PersonList List={List} />
      <hr />
      <Status status="success" />
      {/* <Status opt={true} status="success" /> */}
      <Oscar>
        <PlaceHolder>Oscar Goes to Hardik Desai</PlaceHolder>
      </Oscar>
      <Button
        handleClick={(event, id) => {
          console.log("Button Clicked", event, id);
        }}
      />
      <InputBox value={val} handleChange={(e) => setVal(e.target.value)} />

      <ContainerStyled
        styles={{
          color: "white",
          backgroundColor: "red",
          paddingBlock: "10px",
        }}
      />
    </div>
  );
}

export default App;
