import React, { Component } from 'react'
import './dropdown.css';
class Dropdown extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isExpanded: false,
      clickedColor: this.props.content[0],
    }
  }

  toggledDown() {
    this.setState((state) => {
      return { isExpanded: !state.isExpanded };
    })
  };

  handleColorClick(id) {
    this.setState({clickedColor: id})
  };

  render() {
    const { children, content } = this.props;
    const color = content.find(({id}) => id === this.state.clickedColor)
    console.log(color)
    return ( 
        <div>
            <span>{children}</span>
            <div 
            className="dropdown-button"
            onClick={this.toggledDown.bind(this)}
            >
            {color}
            </div>
            <div className={this.state.isExpanded ? 'dropdown-menu' : 'dropdown-menu-hidden'}>
                {content.map(({id, color})=> (
                    <div key={id} onClick={ () => this.handleColorClick(id)}>
                    <span>{color}</span> 
                    <br/>
                    </div>
                ))}
            </div>
        </div>
    )
  }
}

export default Dropdown
