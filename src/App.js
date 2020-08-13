import React, {Component} from 'react';
import './App.css';
import MyJumbotron from "./components/Jumbotron";
import MySearch from "./components/search";
import MyWrapper from "./components/wrapper";

class App extends Component {

  render() {
    return (
      <div className="App">
      <MyJumbotron />
      <MySearch />
      <MyWrapper />  
      </div>
    );
  }
};    

export default App;