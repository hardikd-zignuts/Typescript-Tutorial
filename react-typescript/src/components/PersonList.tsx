import { person } from "./Person.types";

type PersonListType = {
  List: person[];
};

const PersonList = (props: PersonListType) => {
  return (
    <>
      <hr />
      <div>
        <h3>Person List</h3>
        {props.List.map((person) => (
          <div key={person.first}>
            {person.first} {person.last}
          </div>
        ))}
      </div>
    </>
  );
};

export default PersonList;
