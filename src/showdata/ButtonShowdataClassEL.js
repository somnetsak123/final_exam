import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ButtonShowdataClassEL extends Component {
    render() {
        return (
            <div className="container">
                <Link to={'./ShowdataClassEL'}> <button type="button" className="btn btn-primary">Class EL</button> </Link>
            </div>
        );
    }
}
export default ButtonShowdataClassEL;