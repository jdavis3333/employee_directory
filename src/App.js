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

  searchName = (event) => {
    var value = event.target.value
    console.log(value)
    this.setState({ search: value })
    if (value == "") {
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


        < EmployeeTable
          data={this.state.data}
          sortBy={this.sortBy} />
      </div>
    );
  }
};

export default App;