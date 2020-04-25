import React, { Component } from 'react';

import Dashboard from './dashboard.js'
import Auth from './auth.js';


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      userId : '',
      userAccessToken : '',
      loggedIn : false,
    }

  }

  changeLoggedstate(){
    this.setState({
      loggedIn:true,
      userAccessToken : window.localStorage.getItem('userAccessToken'),
      userId : window.localStorage.getItem('userId')
    })
  }

  render() {

    let display;
    if (this.state.loggedIn===false)
    {
      display = <Auth changeLoggedstate ={this.changeLoggedstate.bind(this)}/>
    }
    else
    {
      display = <Dashboard userId={this.state.userId} userAccessToken={this.state.userAccessToken}/>
    }
    return (
      <div className='container'>
          {display}
      </div>
    );
  }

}

export default App;
