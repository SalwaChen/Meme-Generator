import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import logo from "./u-mad.png";
import Draggable from "react-draggable";
import { FiRefreshCw } from "react-icons/fi";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      top: "",
      bottom: "",
      url: "https://i.imgflip.com/26am.jpg",
      data: [],
      // value: "Font-size",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
      // value: event.target.value,
    });
    // this.setState({
    //   value: event.target.value,
    // });
    // if (this.state.value === "16") {
    //   console.log("its 16");
    // }
  }
  componentDidMount() {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((response) => {
        const { memes } = response.data;
        this.setState({ data: memes });
      });
  }
  handleSubmit(event) {
    event.preventDefault();
    const index = Math.floor(Math.random() * this.state.data.length);
    console.log(index);
    this.setState({ url: this.state.data[index].url });
  }
  render() {
    return (
      <div className="container">
        <div className="logo-cont">
          <a href="#">
            <img src={logo} alt="funny face" width="60" height="50" />{" "}
          </a>
          <h2>Meme Generator</h2>
        </div>
        <main>
          <form onSubmit={this.handleSubmit} autocomplete="off">
            <input
              type="text"
              name="top"
              placeholder="Top text"
              value={this.state.top}
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="bottom"
              placeholder="Bottom text"
              value={this.state.bottom}
              onChange={this.handleChange}
            />
            {/* <select
              id="font-size"
              value={this.state.value}
              onChange={this.handleChange}
            >
              <option value="22" selected>
                Font-size
              </option>
              <option value="16" onChange={()=> this.setState({state.value})}>16</option>
              <option value="18">18</option>
              <option value="20">20</option>
            </select> */}
            <button type="submit">
              <FiRefreshCw />
            </button>
          </form>
          <div>
            <div className="changingImage">
              <Draggable
                axis="y"
                handle=".handle"
                defaultPosition={{ x: 0, y: 0 }}
                position={null}
                grid={[25, 25]}
                scale={1}
                onStart={this.handleStart}
                onDrag={this.handleDrag}
                onStop={this.handleStop}
              >
                <div className="handle">{this.state.top}</div>
              </Draggable>
              <Draggable
                axis="y"
                handle=".handle"
                defaultPosition={{ x: 0, y: 0 }}
                position={null}
                grid={[25, 25]}
                scale={1}
                onStart={this.handleStart}
                onDrag={this.handleDrag}
                onStop={this.handleStop}
              >
                <div className="handle bottom">{this.state.bottom}</div>
              </Draggable>
              <img src={this.state.url} alt="changing image"></img>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
