import { Route } from 'react-router-dom'
import React, { Component } from "react"
import AnimalList from './animals/animalList'
import LocationList from './location/locationList'
import EmployeeList from './employee/employeeList'
import OwnersList from './owners/owners'


class ApplicationViews extends Component {
  employeesFromAPI = [
    { id: 1, name: "Jessica Younker" },
    { id: 2, name: "Jordan Nelson" },
    { id: 3, name: "Zoe LeBlanc" },
    { id: 4, name: "Blaise Roberts" }
  ]

  locationsFromAPI = [
    { id: 1, name: "Nashville North", address: "500 Circle Way" },
    { id: 2, name: "Nashville South", address: "10101 Binary Court" }
  ]

  animalsFromAPI = [
    { id: 1, name: "Doodles" },
    { id: 2, name: "Jack" },
    { id: 3, name: "Angus" },
    { id: 4, name: "Henley" },
    { id: 5, name: "Derkins" },
    { id: 6, name: "Checkers" }
  ]

  ownersFromAPI = [
    { id: 1, name: "Steve" },
    { id: 2, name: "John" },
    { id: 3, name: "Mike" },
    { id: 4, name: "Sue" },
    { id: 5, name: "Clark" },
    { id: 6, name: "Angela" }

  ]

  state = {
    employees: this.employeesFromAPI,
    locations: this.locationsFromAPI,
    animals: this.animalsFromAPI,
    owners: this.ownersFromAPI
  }

  render() {
    return (
      <React.Fragment>
        <Route exact path="/" render={(props) => {
          return <LocationList locations={this.state.locations} />
        }} />
        <Route path="/animals" render={(props) => {
          return <AnimalList animals={this.state.animals} />
        }} />
        <Route path="/employee" render={(props) => {
          return <EmployeeList employees={this.state.employees} />
        }} />
        <Route path="/owners" render={(props) => {
          return <OwnersList owners={this.state.owners} />
        }} />

      </React.Fragment>
    )
  }
}

export default ApplicationViews