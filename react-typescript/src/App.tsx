import "./App.css";
import AppBar from "./components/AppBar";
import Oscar from "./components/Oscar";
import Person from "./components/Person";
import PersonList from "./components/PersonList";
import PlaceHolder from "./components/PlaceHolder";
import Status from "./components/Status";

function App() {
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
    </div>
  );
}

export default App;
