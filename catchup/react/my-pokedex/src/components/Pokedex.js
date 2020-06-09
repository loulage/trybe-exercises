import React, { Component } from 'react'
import Pokemon from './Pokemon';
class Pokedex extends Component {
    render() {
        return (
            <div>
                {console.log(this.props)}
                {this.props.pokemons.map(element => <Pokemon key={element.id} pokemon={element} /> )}
            </div>
        )
    }
}

export default Pokedex
