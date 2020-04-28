import React from "react";  

class Pokemon extends React.Component {
  render() {
    const { name, type, averageWeight, image } = this.props.pokemon;
  console.log('pokemon', this.props.pokemon, this.props);
    return (
      <div className="pokemon">
        <div>
          <p>{name}</p>
          <p>{type}</p>
          <p>
            {`Average Weight: ${averageWeight.value}
            ${averageWeight.measurementUnit}`}
          </p>
        </div>

        <img src={image} alt="" />
      </div>
    );
  }
}
export default Pokemon;
