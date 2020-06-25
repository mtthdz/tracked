import React, { Component } from 'react';
import { auth, provider } from './firebase';
import './App.css';




class App extends Component {
  constructor() {
    super();

    this.state = {
      user: null,
    }
  }

  login = () => {
    auth.signInWithPopup(provider).then((result) => {
      const user = result.user;
      this.setState({
        user
      });
    });
  }

  logout = () => {
    auth.signOut().then(() => {
      this.setState({
        user: null
      })
    })
  }

  componentDidMount() {
    auth.onAuthStateChanged((user) => {
      if (user) {
        this.setState({user});
      }
    })
  }


  render() {
    return (
      <div className="App">
        <h1>nice</h1>

        {this.state.user ? 
        <button onClick={this.logout}>Log Out</button> : 
        <button onClick={this.login}>Log In</button>}
      </div>
    );
  }
}

export default App;
