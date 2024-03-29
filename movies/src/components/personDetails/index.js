import React, { useState } from "react";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import MonetizationIcon from "@mui/icons-material/MonetizationOn";
import StarRate from "@mui/icons-material/StarRate";
import NavigationIcon from "@mui/icons-material/Navigation";
import Fab from "@mui/material/Fab";
import Typography from "@mui/material/Typography";
import Drawer from "@mui/material/Drawer";




const root = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: 1.5,
    margin: 0,
};
const chip = { margin: 0.5 };

const PersonDetails = ({ person }) => {  // Don't miss this!
  const [drawerOpen, setDrawerOpen] = useState(false);

  

  return (
    <>
      <Typography variant="h5" component="h3">
        Overview
      </Typography>

      <Typography variant="h6" component="p">
        {person.name}
      </Typography> 

    <Paper component="ul" sx={{...root}}>
        <Chip label="Quick Info" sx={{...chip}} color="primary" />
        <Chip label={`Born ${person.birthday}`} />
        <Chip label={`From ${person.place_of_birth}`} />
        <Chip label={`Known for ${person.known_for_department}`} />
      </Paper>
{/* 
      <Paper component="ul" sx={{...root}}>
        <Chip icon={<AccessTimeIcon />} label={`${person.runtime} min.`} />
        <Chip
          icon={<MonetizationIcon />}
          label={`${person.revenue.toLocaleString()}`}
        />
        <Chip
          icon={<StarRate />}
          label={`${person.vote_average} (${person.vote_count})`}
        />
        <Chip label={`Released: ${person.release_date}`} />
      </Paper>


      <Paper 
        component="ul" 
        sx={{...root}}
      >
        <li>
          <Chip label="Production Countries" sx={{...chip}} color="primary" />
        </li>
        {person.production_countries.map((g) => (
          <li key={g.name}>
            <Chip label={g.name} sx={{...chip}} />
          </li>
        ))}
      </Paper> */}

      </>
  );
};
export default PersonDetails ;