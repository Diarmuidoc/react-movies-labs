import React, {} from "react";
import PersonHeader from "../headerPerson";
import Grid from "@mui/material/Grid";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { getPersonImages } from "../../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from '../spinner'
import CardMedia from "@mui/material/CardMedia";
import img from '../../images/film-poster-placeholder.png'

const TemplatePersonPage = ({ person, children }) => {
  const { data , error, isLoading, isError } = useQuery(
    ["images", { id: person.id }],
    getPersonImages
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }
  const images = data.posters 

  return (
    <>
      <PersonHeader person={person} />

      <Grid container spacing={5} sx={{ padding: "15px" }}>
        <Grid item xs={3}>
          <div sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
          }}>
            <CardMedia
                sx={{ height: 500 }}
                image={
                    person.profile_path
                    ? `https://image.tmdb.org/t/p/w185/${person.profile_path}`
                    : img
                }
            />
          </div>
        </Grid>

        <Grid item xs={9}>
          {children}
        </Grid>
      </Grid>
    </>
  );
};

export default TemplatePersonPage;