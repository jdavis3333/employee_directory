import React from 'react';
import './App.css';
import MyJumbotron from "./components/jumbotron";
// import MySearch from "./components/search";
import EmployeeTable from "./components/employee-table";
import data from "../src/giants.json";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: data,
      direction: {
        first_name: 'asc'
      }
    }
    this.sortBy = this.sortBy.bind(this)
  }

  sortBy(key) {
    this.setState({
      data: data.sort((a, b) => (
        this.state.direction[key] === 'asc'
          // ? parseFloat(a[key]) - parseFLoat(b[key])
          // : parseFloat(b[key]) - parseFLoat(a[key])
      )),
      direction: {
        [key]: this.state.direction[key] === 'asc'
          ? 'desc'
          : 'asc'
      }
    })
  }

  render() {
      return(
      <div className = "App" >
        <MyJumbotron />
      {/* <MySearch /> */}
          < EmployeeTable 
        data = { this.state.data } 
        sortBy = { this.sortBy } />  
      </div>
    );
  }
};

export default App;