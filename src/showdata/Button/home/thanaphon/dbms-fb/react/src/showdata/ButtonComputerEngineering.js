import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ButtonComputerEngineering extends Component {
    render() {
        return (
            <div className="container">
                <Link to={'./ShowdataComputerEngineering'}> <button type="button" className="btn btn-primary">ComputerEngineering</button> </Link>
            </div>
        );
    }
}
export default ButtonComputerEngineering;