import React from "react";

class AProduct extends React.Component {
  render() {
    return (
      <div>
        <h1>Total Count: {this.props.count}</h1>
        <h1>Average Product Price: {this.props.price} </h1>
      </div>
    );
  }
}

export default AProduct;
