type ContainerType = {
  styles: React.CSSProperties;
};
const ContainerStyled = (props: ContainerType) => {
  return (
    <div className="mt-2 rounded-pill" style={props.styles}>
      YouTube
    </div>
  );
};

export default ContainerStyled;
