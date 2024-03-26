import React from "react";
import { getPeoplePopular } from "../api/tmdb-api";
import PersonListPageTemplate from '../components/templatePersonListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites'

const PeoplePopular = (props) => {

  const {  data, error, isLoading, isError }  = useQuery('discover', getPeoplePopular)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const people = data.results;

  return (
    <PersonListPageTemplate
      title="Popular People"
      people={people}
      action={(people) => {
        return <AddToFavoritesIcon people={people} />
      }}
    />
);
};
export default PeoplePopular;