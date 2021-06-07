import React from "react";
import Header from "./Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      top: "",
      bottom: "",
      url: "https://i.imgflip.com/26am.jpg",
      data: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
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
        <Header />
        <main>
          <form onSubmit={this.handleSubmit}>
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
            <button type="submit">Go!</button>
          </form>
          <div>
            <div className="changingImage">
              <div className="float">{this.state.top}</div>
              <div className="float bottom">{this.state.bottom}</div>
              <img src={this.state.url} alt="changing image"></img>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
