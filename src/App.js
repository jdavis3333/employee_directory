import React from 'react';
import './App.css';
// import MyJumbotron from "./components/Jumbotron";
// import MySearch from "./components/search";
import EmployeeTable from "./components/employee-table";
import data from "../src/giants.json";

class App extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        data: data
      }
      this.sortBy = this.sortBy.bind(this)
    }

    sortBy(key) {
      this.setState({
        data: data.sort( (a,b) => a < b)
      })
    }

  render() {
    return (
      <div className="App">
      {/* <MyJumbotron />
      <MySearch /> */}
      <EmployeeTable 
        data={this.state.data} 
        sortBy={this.sortBy}/>  
      </div>
    );
  }
};    

export default App;