import React, { Component } from 'react';
import keys from './authenticationKeys.js'
import qs from 'qs'


class Auth extends Component {

  constructor(props) {
    super(props);
    this.state = {
      instagramAppId : keys.instagramAppId,
      instagramSecret : keys.instagramSecret,
      redirectUri : keys.redirectUri,
      userId : '',
      userAccessToken : ''
    }

    this.authenticateUser = this.authenticateUser.bind(this)
    this.getUserAccessToken = this.getUserAccessToken.bind(this)
    this.getUserCode = this.getUserCode.bind(this)

    this.authenticateUser()


  }
  
  authenticateUser(){
    let userAccessToken = window.localStorage.getItem('userAccessToken')
    let userId = window.localStorage.getItem('userId')

    fetch('https://graph.instagram.com/'+userId+'?fields=id,username&access_token='+userAccessToken)
    .then((response) => {
      return new Promise((resolve,reject)=>{
        if(response.status===200)
        {
          resolve(response.json());
        }
        reject(new Error("Couldn't Log In"))
      })
    })
    .then((data)=>{
      this.setState({
        userId : userId,
        userAccessToken : userAccessToken
      })
      this.props.changeLoggedstate()
    })
    .catch((error)=>{
      console.log(error)
      let params = new URLSearchParams(window.location.search);
      let code = params.get('code')
      if(code!==null)
        this.getUserAccessToken(code)
    })
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
      return new Promise((resolve,reject)=>{
        if(response.status===200)
        {
          resolve(response.json());
        }
        else
        {
          reject(new Error("userAccessToken couldn't be fetched"))
        }
      })

    })
    .then((data)=>{
      console.log(data)
      this.setState({
        userId : data.user_id,
        userAccessToken : data.access_token
      })
      this.props.changeLoggedstate()
      window.localStorage.setItem('userAccessToken',data.access_token)
      window.localStorage.setItem('userId',data.user_id)
    })
    .catch((error)=>{
      console.log(error)
    })

  }

  getUserCode(){
      let xhr = new XMLHttpRequest();
      console.log("Inside getUserAccessToken")
      let url = 'https://api.instagram.com/oauth/authorize?client_id=' + this.state.instagramAppId + '&redirect_uri=' + this.state.redirectUri + '&scope=user_profile,user_media&response_type=code'
      xhr.addEventListener('load', () => {
        console.log(xhr.responseURL)
        window.location.replace(xhr.responseURL)
      })
      xhr.open('GET', url)
      xhr.send()
  }

  render() {
    return (
      <div>
        <button type="button" onClick={this.getUserCode.bind(this)} className="btn btn-primary">Give Authorization</button>
      </div>
    );
  }

}

export default Auth;
