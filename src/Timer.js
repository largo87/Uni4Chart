const React = require("react");
const ms = require("pretty-ms");

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0,
      isOn: false,
      start: 0
    };
  }
  componentDidMount() {
    this.setState({
      isOn: true,
      time: this.state.time,
      start: Date.now() - this.state.time
    });
    this.timer = setInterval(
      () =>
        this.setState({
          time: Date.now() - this.state.start
        }),
      1
    );
  }

  render() {
    return (
      <div>
        <h1 className="relative">
          Counter:
          {ms(1000 * Math.round(this.state.time / 1000))
            .split("m")
            .join(" ")}
        </h1>
      </div>
    );
  }
}

export default Timer;
