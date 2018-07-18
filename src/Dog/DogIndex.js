import React, { Component } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { DogDetails } from "./DogDetails";

const GET_DOGS = gql`
  {
    dogs {
      id
      breed
    }
  }
`;
export class DogIndex extends Component {
  constructor() {
    super();
    this.state = {breed: null};
    this.onDogSelected = this.onDogSelected.bind(this);
  }

  onDogSelected(event) {
    this.setState({ breed: event.target.value });
  }

  render() {
    return (
      <Query query={GET_DOGS}>
      {({ loading, error, data }) => {
        if (loading) return "Loading...";
        if (error) return `Error! ${error.message}`;
        let dogDetails;
        if (this.state.breed) {
          dogDetails = <DogDetails breed={this.state.breed}/>
        }
        
        return (
          <div>
            <select name="dog" onChange={this.onDogSelected}>
              {data.dogs.map(dog => (
                <option key={dog.id} value={dog.breed}>
                  {dog.breed}
                </option>
              ))}
            </select>
            { dogDetails }
            
          </div>
        );
      }}
    </Query>
  )}
};
