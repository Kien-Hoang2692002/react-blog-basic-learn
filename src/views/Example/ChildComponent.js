import React from "react";

class ChildComponent extends React.Component {
  render() {
    let { name, age } = this.props;

    return (
      <>
        <h4>
          Children Component: {name} - {age}{" "}
        </h4>
      </>
    );
  }
}

export default ChildComponent;
