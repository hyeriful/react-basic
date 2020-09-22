import React, { useEffect } from "react";

class Detail extends React.Component {
  // 2. componentDidMount 됨
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/");
    }
  }

  // 1. 먼저 render 되고
  render() {
    const { location } = this.props;
    if (location.state) {
      return <span>{location.state.title}</span>;
    } else {
      return null;
    }
  }
}

export default Detail;
