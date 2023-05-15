type PersonListType = {
  List: {
    first: string;
    last: string;
  }[];
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
