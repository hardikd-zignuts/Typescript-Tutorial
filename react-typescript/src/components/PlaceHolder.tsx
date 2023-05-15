import React from "react";
type PlaceType = {
  children: string;
};
const PlaceHolder = (props: PlaceType) => {
  return <div>{props.children}</div>;
};

export default PlaceHolder;
