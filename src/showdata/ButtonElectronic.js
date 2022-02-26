import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ButtonShowdataElectronic extends Component {
    render() {
        return (
            <div className="container">
                <Link to={'./ShowdataElectronic'}> <button type="button" className="btn btn-primary">Electronic</button> </Link>
            </div>
        );
    }
}
export default ButtonShowdataElectronic;