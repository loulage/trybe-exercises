import React from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: "",
    };

    this.fetchDog = this.fetchDog.bind(this);
  }

  componentDidMount(){
    this.fetchDog();
  }

  fetchDog() {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((result) => this.setState({ data: result }));
  }

  render() {
    let show
    if (this.state.date === '') {
      show = <div>loading...</div>
  } else {
    show =  <div>
        <h1>Random Dog!</h1>
        <h4>3rd doggo will show your future dog</h4>
        <div>
          <img src={this.state.data.message} alt="" />
        </div>
        <button onClick={this.fetchDog}>Generate Dog!</button>
      </div>
  }
    
    return <div>{show}</div>
  }
}
export default App;
