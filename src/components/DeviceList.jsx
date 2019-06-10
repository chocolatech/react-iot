import React from "react";
const DeviceList = props => {
  return (
    <React.Fragment>
      <div>{props.name} </div>
      <p>{props.status}</p>
      <p>{props.connection}</p>
    </React.Fragment>
  );
};
export default DeviceList;
