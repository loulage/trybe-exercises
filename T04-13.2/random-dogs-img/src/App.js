import React from 'react';
import './App.css';
class App extends React.Component {
constructor(props) {
  super(props)

  this.state = {
    apiData: '',
  }
  this.fetchApi = this.fetchApi.bind(this);
}

fetchApi() {
  fetch('https://dog.ceo/api/breeds/image/random').then((response) => {
    response.json()
      .then((data) => this.setState({apiData: data}));
  })
}

componentDidMount() {
  this.fetchApi();
}

componentDidUpdate() {
  localStorage.setItem("dogURL", this.state.apiData.message);
  const split = this.state.apiData.message.split("/");
  console.log(split)
  const dogBreed = this.state.apiData.message.split("/")[4];
  alert (dogBreed);
};

// Se shouldComponentUpdate for falso, aplicação não sofrerá updtate.
shouldComponentUpdate(nextProps, nextState) {
  if (nextState.apiData.message.includes("terrier")) {
    return false;
  }
  return true;
} 





 render() {
  const {apiData} = this.state;
  if (apiData === '') return <p>Loading...</p>
  return (
    <div>
    <img src={apiData.message} alt='' />
    <button type='text' onClick={this.fetchApi}>Novo Dog</button>
    </div>
  );
}

}

export default App;
