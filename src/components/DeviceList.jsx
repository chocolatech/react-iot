import React from "react";
const DeviceList = ({device, device: {name, status, connection}}) => {
  return (
    <React.Fragment>
      <div>{name}</div>
      <p>Status: {status}</p>
      <p>Connection: {connection}</p>
    </React.Fragment>
  );
};
export default DeviceList;
