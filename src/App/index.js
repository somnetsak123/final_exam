import React, { Component } from 'react';
import ButtonRegister from "../register/ButtonRegister";
import ButtonShowdata from "../showdata/ButtonShowdata";
import Facebook from "./Facebook";
import './style.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="jumbotron mb-0 text-white bg" style={{ height: '100%' }}>
          <h1 className="display-3 ">Net Welcome to React</h1>
            <div className="my-3"><Facebook /></div> 
            <div id="fb-root"></div>

    <script async defer crossorigin="anonymous" src="https://connect.facebook.net/th_TH/sdk.js#xfbml=1&version=v12.0&appId=4604466629645739&autoLogAppEvents=1" nonce="wFeIseuI"></script>
    <div class="fb-login-button" data-width="" data-size="large" data-button-type="continue_with" data-layout="rounded" data-auto-logout-link="false" data-use-continue-as="true"></div>
        
         < div className="my-5">
            <img className="logo" src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" alt="" style={{ height: '200px', width: '200px' }} />
            <span className="display-1 mx-5">+</span>
            <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1280px-Node.js_logo.svg.png" alt="" style={{ height: '200px', width: '300px' }} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
