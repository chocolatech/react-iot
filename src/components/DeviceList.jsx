import React from "react";
const DeviceList = ({device}) => {
  return (
    <React.Fragment>
      <div>{device.name}</div>
      <p>Status: {device.status}</p>
      <p>Connection: {device.connection}</p>
      <hr/>
    </React.Fragment>
  );
};
export default DeviceList;
