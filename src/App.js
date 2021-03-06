import React, { Component } from "react";
import user from "./images/user.png";
import "./App.css";
import {store} from './store/store'

class App extends Component {

  state = {
    name: 'David'
  }

  componentWillMount(){
    console.log('will mount')
    this.setState({name: 'chidi'})
  }
  
  render() {
    return (
      <div className="App">
        <section className="User__img">
          <img src={user} alt="user" />
        </section>

        <section className="User__info">
          <p>
            {" "}
            <span className="faint">I am</span> a {store.getState().description} {this.state.name}
          </p>
          <p>
            {" "}
            <span className="faint">I like</span> {store.getState().likes}
          </p>

          <p className="User__info__details User__info__divider faint">
            <span>Name: </span>
            <span>{store.getState().name}</span>
          </p>
          <p className="User__info__details faint">
            <span>Location: </span>
            <span>{store.getState().location}</span>
          </p>
        </section>
      </div>
    );
  }
}

export default App;
