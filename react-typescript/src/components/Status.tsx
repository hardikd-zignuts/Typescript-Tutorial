type StatusType = {
  status: "loading" | "success" | "error";
  opt?: boolean; // This is Optional Prop
  // here we use Union type because other type of string is not in condition
};
const Status = (props: StatusType) => {
  let msg = "";
  if (props.status === "loading") {
    msg = "Loading...";
  } else if (props.status === "success") {
    msg = "Data fetched successfully...";
  } else if (props.status === "error") {
    msg = "Some Error Occurred";
  }
  return <div>Status:- {msg}</div>;
};
export default Status;
