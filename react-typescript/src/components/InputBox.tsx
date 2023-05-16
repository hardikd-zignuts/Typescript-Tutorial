type InputType = {
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
const InputBox = (props: InputType) => {
  return (
    <>
      <div>Value is : {props.value}</div>
      <input
        type="text"
        value={props.value}
        onChange={(event) => props.handleChange(event)}
      />
    </>
  );
};

export default InputBox;
