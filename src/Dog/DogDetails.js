import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";

const GET_DOG_DETAILS = gql`
  query dog($breed: String!) {
    dog(breed: $breed) {
      id
      displayImage
    }
  }
`;

export const DogDetails = ({ breed }) => (
  <Query query={GET_DOG_DETAILS} variables={{ breed }}>
    {({ loading, error, data }) => {
      if (loading) return null;
      if (error) return `Error!: ${error}`;

      return (
        <img src={data.dog.displayImage} style={{ height: 100, width: 100 }} />
      );
    }}
  </Query>
);