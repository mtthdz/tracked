import React, { Component } from 'react';
import firebase, { auth, provider } from './firebase';
import './App.css';




class App extends Component {
  constructor() {
    super();

    this.state = {
      user: null,
    }
  }

  // authentication fns
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
        user: null,
        surname: "",
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
  //


  // database read/writes
  handleChange = (event) => {
    this.setState({
      surname: event.target.value
    })
  }

  handleClick = (event) => {
    event.preventDefault();

    const dbRef = firebase.database().ref();
    dbRef.push(this.state.surname);
  }
  //

  
  render() {
    return (
      <div className="App">

        {this.state.user ? 
        <button onClick={this.logout}>Log Out</button> : 
        <button onClick={this.login}>Log In</button>}

        {/* sample form */}
        <form action="submit">
          <label htmlFor="userSurname">What is your last name?</label>          
          <input 
            onChange={this.handleChange} 
            value={this.state.surname}
            type="text" 
            id="last name"
          />

          <button onClick={this.handleClick} >save</button>
        </form>
      </div>
    );
  }
}

export default App;
