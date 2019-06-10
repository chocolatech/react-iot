import React from "react";

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
        {this.state.data.map(device => (
          <React.Fragment>
            <div key={device.id}>{device.name} </div>
            <p>{device.status}</p>
            <p>{device.connection}</p>
          </React.Fragment>
        ))}
      </React.Fragment>
    );
  }
}
