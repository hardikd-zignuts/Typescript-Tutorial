type TypeOscar = {
  children: React.ReactNode;
};

const Oscar = (props: TypeOscar) => {
  return <div className="bg-primary text-white p-2">{props.children}</div>;
};

export default Oscar;
