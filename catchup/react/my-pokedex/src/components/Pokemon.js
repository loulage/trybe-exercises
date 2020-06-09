import React, { Component } from 'react'

class Pokemon extends Component {
  render() {
    const { name, type, averageWeight, image } = this.props.pokemon;
    return (
      <div>
        <h1>{name}</h1>
        <h2>{type}</h2>
        <h3>{averageWeight.value}{averageWeight.measurementUnit}</h3> 
        <img src={image} alt="/" />         
      </div>
    )
  }
}

export default Pokemon;
