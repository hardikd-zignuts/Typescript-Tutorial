type ButtonType = {
  handleClick: (e: React.MouseEvent<HTMLButtonElement>, id: number) => void;
};
const Button = (props: ButtonType) => {
  return (
    <div>
      <button
        className="btn btn-success my-2"
        onClick={(e) => props.handleClick(e, 1)}
      >
        Click
      </button>
    </div>
  );
};

export default Button;
