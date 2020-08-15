# employee_directory

Employee Directory is an application that allows employers search and sort through a list of their employees.  Search and sort functionalities are based on the Employee's name.

### Prerequisites

* [Visual Studio Code](https://code.visualstudio.com/)


### Installation Guide

* You will need to download this folder to your computer. You may do this either by downloading the document as a zip file, or by cloning the git repository to a folder on your computer using Git Bash. In order to do this, click the green button labled "Clone or Download", and select your method of retrieving the file.

* If you want to use the git clone method, your first step is to copy the link provided. From here, you want to navigate to the desired location on your computer in your Git Bash terminal, or navigate to the desired location via your explorer, right click and select "Git Bash Here". Within your Git Bash terminal, type the following: `git clone git@github.com:jdavis3333/employee_directory.git`

* Once the repository exists locally on your computer, navigate to within the newly downloaded folder using git bash, or use the "Git Bash Here" method to open the terminal within the correct folder.

* To ensure you are in the coorect folder, type the following and hit enter: `ls`

* Finally, you will need to ensure that all of the required npm packages are installed. Type the following into your Git Bash terminal: `npm i`

### Use

* Created app.js homepage
```
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
```      
* Created json file with employee information
```
   {
        "id": 1,
        "name": "Belt",
        "phone_number": "415-777-6601",
        "email_address": "belt@sfgiants.com",
        "birthday": "01/02/1992",
        "image": "https://securea.mlb.com/mlb/images/players/head_shot/474832.jpg"
    },
```
* Search functionality
```
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
```
* Sort functionality
```
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
```
## Built With

* [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* [React](https://reactjs.org/)
* [React Bootstrap](https://react-bootstrap.github.io/)


## Authors

* Joe Davis 

- [Link to Portfolio](https://gentle-bayou-48835.herokuapp.com/)
- [Link to Github](https://github.com/jdavis3333)
- [Link to LinkedIn](https://www.linkedin.com/in/joe-davis-a8380232/)


## License

This project is licensed under the ![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)
