import React from 'react'
import {connect} from 'react-redux';
import {addClick} from '../actions/addClick';

class Button extends React.Component {
    render() {
        return (
            <div>
                <button type="button" onClick={this.props.add}>Click Me</button>
            </div>
        )
    }
}
const mapDispatchToProps = dispatch => ({
    add: () => dispatch(addClick()),
});

export default connect(null, mapDispatchToProps)(Button);