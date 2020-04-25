import React, { Component } from 'react';

class Dashboard extends Component {

  constructor(props){
    super(props)
    this.state = {
      username: '',
    }

    fetch('https://graph.instagram.com/'+this.props.userId+'?fields=username&access_token='+this.props.userAccessToken)
    .then((response)=>{
      // console.log(response.json())
      return response.json()
    })
    .then((data)=>{
      console.log(data)
        this.setState({
          username:data.username
        })
    })
  }

  render() {
    return (
      <div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{this.props.userId}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{this.props.userAccessToken}</h6>
          <p className="card-text">{this.state.username}</p>
        </div>
      </div>
      </div>
    );
  }

}

export default Dashboard;
