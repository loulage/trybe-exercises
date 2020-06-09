import React from 'react';
import './App.css';
import fetchApi from './Api';
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
