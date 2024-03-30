import React from "react";
import Header from "../headerMovieList";
//import FilterCard from "../filterMoviesCard";
import PersonList from "../personList";
import Grid from "@mui/material/Grid";

function PersonListPageTemplate({ people, title, action }) {

  let displayedPeople = people;
    
  return (
    <Grid container sx={{ padding: '20px' }}>
      <Grid item xs={12}>
        <Header title={title} />
      </Grid>
      <Grid item container spacing={5}>
        {/* took out the filter box */}
        <PersonList action={action} people={displayedPeople}></PersonList>
      </Grid>
    </Grid>
  );
}
export default PersonListPageTemplate;