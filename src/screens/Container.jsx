import React from "react";
import DeviceList from "components/DeviceList";

export default class ScreensContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }

  getData = () => {
    const ENDPOINT = `/devices`;
    fetch(ENDPOINT)
      .then(res => res.json())
      .then(data => {
        console.log(data.length);
        this.setState({ data });
      });
  };

  componentDidMount() {
    this.getData();
  }
  render() {
    return (
      <React.Fragment>
        <h2>List</h2>
        <hr/>
        {this.state.data.map(device => (
          <DeviceList key={device.id} device={device} />
        ))}
      </React.Fragment>
    );
  }
}
