import React, { Component } from 'react';

class Dashboard extends Component {

  state = {
    requestUrl : 'https://api.instagram.com/oauth/authorize?',
    instagramAppId : '534548134144297',
    redirectUri : 'https://tantrojan.github.io/',
    userAccessToken : '',

  }
  getUserAccessToken(){
      let xhr = new XMLHttpRequest();
      console.log("Inside getUserAccessToken")
      let url = this.state.requestUrl + 'client_id=' + this.state.instagramAppId + '&redirect_uri=' + this.state.redirectUri + '&scope=user_profile,user_media&response_type=code'
      xhr.addEventListener('load', () => {
        console.log(xhr.responseURL)
        window.open(xhr.responseURL)
      })
      xhr.open('GET', url)
      xhr.send()
      // fetch(url).then((resp)=>{ return resp.text() }).then((text)=>{ console.log(text) })
  }
  render() {

    let display;
    if (this.state.userAccessToken==='')
    {
      display = <button type="button" onClick={this.getUserAccessToken.bind(this)} className="btn btn-primary">Give Authorization</button>
    }
    else
    {
      display =
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Steve Jobs</h5>
          <h6 className="card-subtitle mb-2 text-muted">steve@apple.com</h6>
          <p className="card-text">Stay Hungry, Stay Foolish</p>
        </div>
      </div>
    }
    return (
      <div >
          {display}
      </div>
    );
  }

}

export default Dashboard;
