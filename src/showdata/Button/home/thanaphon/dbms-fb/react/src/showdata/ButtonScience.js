import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ButtonScience extends Component {
    render() {
        return (
            <div className="container">
                <Link to={'./ShowdataScience'}> <button type="button" className="btn btn-primary">Science</button> </Link>
            </div>
        );
    }
}
export default ButtonScience;