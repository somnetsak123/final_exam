import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ButtonShowdataClassCT extends Component {
    render() {
        return (
            <div className="container">
                <Link to={'./ShowdataClassCT'}> <button type="button" className="btn btn-primary">Class CT</button> </Link>
            </div>
        );
    }
}
export default ButtonShowdataClassCT;