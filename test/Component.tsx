import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

export const GET_DOG_QUERY = gql`
  query getDog($name: String) {
    dog(name: $name) {
      id
      name
      breed
    }
  }
`;

export interface ComponentProps {
  name: string;
}

export const Component: React.FC<ComponentProps> = ({ name }) => {
  const { data, loading, error } = useQuery(GET_DOG_QUERY, { variables: name });

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <p>
      {data.dog.name} is a {data.dog.breed}
    </p>
  );
};
