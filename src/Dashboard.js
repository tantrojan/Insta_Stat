import React, { Component } from 'react';
import keys from './authenticationKeys.js'
import qs from 'qs'

class Dashboard extends Component {

  state = {
    requestUrl : 'https://api.instagram.com/oauth/authorize?',
    instagramAppId : keys.instagramAppId,
    instagramSecret : keys.instagramSecret,
    redirectUri : keys.redirectUri,
    userAccessToken : '',
    userId : ''
  }
  constructor(props) {
    super(props);

    let loc = window.location.search;
    let params = new URLSearchParams(loc);
    let code = params.get('code')
    console.log("Inside constructor")

    this.getUserAccessToken(code)

  }
  getUserAccessToken(code){
    let url = 'https://api.instagram.com/oauth/access_token';

    let postData = {
        client_id: this.state.instagramAppId,
        client_secret: this.state.instagramSecret,
        grant_type: 'authorization_code',
        redirect_uri: this.state.redirectUri,
        code:code
    }

    let promise = fetch(url,{
        method:'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        },
        body: qs.stringify(postData)
      }
    );

    promise.then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log('Success:', data);
      // this.setState({
      //   userAccessToken: data.access_token,
      //   userId: data.user_id
      // })
    })
    .catch((error) => {
      console.error('Error:', error);
    });

  }
  getUserCode(){
      let xhr = new XMLHttpRequest();
      console.log("Inside getUserAccessToken")
      let url = this.state.requestUrl + 'client_id=' + this.state.instagramAppId + '&redirect_uri=' + this.state.redirectUri + '&scope=user_profile,user_media&response_type=code'
      xhr.addEventListener('load', () => {
        console.log(xhr.responseURL)
        window.location.replace(xhr.responseURL)
      })
      xhr.open('GET', url)
      xhr.send()
  }
  render() {

    let display;
    if (this.state.userAccessToken==='')
    {
      display = <button type="button" onClick={this.getUserCode.bind(this)} className="btn btn-primary">Give Authorization</button>
    }
    else
    {
      display =
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{this.state.userId}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{this.state.userAccessToken}</h6>
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
