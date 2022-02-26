import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ButtonElectricalEngineeri extends Component {
    render() {
        return (
            <div className="container">
                <Link to={'./ShowdataElectricalEngineeri'}> <button type="button" className="btn btn-primary">ElectricalEngineeri</button> </Link>
            </div>
        );
    }
}
export default ButtonElectricalEngineeri;