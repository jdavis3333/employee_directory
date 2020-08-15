import React from 'react';
import './App.css';
import MyJumbotron from "./components/jumbotron";
// import MySearch from "./components/search";
import EmployeeTable from "./components/employee-table";
import data from "../src/giants.json";
import { Form, Container } from 'react-bootstrap';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: data,
      search: "",
      direction: 'asc'
    }
    // this.sortBy = this.sortBy.bind(this)
  }

  sortName = () => {
    var employee = this.state.data
    //check state, then do for loop. in else part, swap to desc. also change state of direction 
    for (var i = 0; i < employee.length; i++) {
      for (var j = 0; j < employee.length; j++) {
        if (employee[i].name > employee[j].name) {
          var temp = employee[i]
          employee[i] = employee[j]
          employee[j] = temp

        }
      }
      this.setState({ data: data })
    }
    console.log(employee)

  }

  searchName = (event) => {
    var value = event.target.value
    console.log(value)
    this.setState({ search: value })
    if (value === "") {
      this.setState({ data: data })
    } else {
      var newList = []
      var employee = this.state.data
      for (let i = 0; i < employee.length; i++) {
        var n = (employee[i].name.toLowerCase()).indexOf(value.toLowerCase());
        console.log(employee[i].name, value)
        if (n !== -1) {
          newList.push(employee[i])
        }
      }
      console.log(newList)
      this.setState({ data: newList })
    }
  }

  render() {
    return (
      <div className="App" >
        <MyJumbotron />
        <Container fluid>
          <Form.Control value={this.state.search} onChange={this.searchName} type="text" placeholder="search" />
        </Container>
        <table>
          <thead>
            <tr>
              <th>Image</th>
              <th>
                <p
                  onClick={this.sortName}
                >Name</p>
              </th>
              <th>Phone Number</th>
              <th>Email</th>
              <th>DOB</th>
            </tr>
          </thead>

          < EmployeeTable
            data={this.state.data}
            sortBy={this.sortBy} />
        </table>
      </div>
    );
  }
};

export default App;