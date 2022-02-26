import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ButtonComputerScience extends Component {
    render() {
        return (
            <div className="container">
                <Link to={'./ShowdataComputerScience'}> <button type="button" className="btn btn-primary">ComputerScience</button> </Link>
            </div>
        );
    }
}
export default ButtonComputerScience;