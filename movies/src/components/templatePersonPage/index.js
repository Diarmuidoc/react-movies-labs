import React, {} from "react";
import PersonHeader from "../headerPerson";
import Grid from "@mui/material/Grid";
import img from '../../images/film-poster-placeholder.png'

const TemplatePersonPage = ({ person, children }) => {

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
            <img
                    width={'100%'}
                        src={`https://image.tmdb.org/t/p/w185/${person.profile_path}`}
                        alt={img}
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