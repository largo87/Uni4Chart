import React from "react";

class AButton extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <button type="submit" onClick={this.props.onClick}>
        {this.props.name}
      </button>
    );
  }
}

export default AButton;
