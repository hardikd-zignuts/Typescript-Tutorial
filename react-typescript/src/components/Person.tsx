type PersonProps = {
  person: {
    first: string;
    last: string;
  };
};
const Person = (props: PersonProps) => {
  return (
    <div>
      <h5 className="my-2">
        {props.person.first} {props.person.last}
      </h5>
    </div>
  );
};

export default Person;
