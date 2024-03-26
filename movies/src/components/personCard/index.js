import React, { useContext  } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CalendarIcon from "@mui/icons-material/CalendarTodayTwoTone";
import StarRateIcon from "@mui/icons-material/StarRate";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import img from '../../images/film-poster-placeholder.png'
import { Link } from "react-router-dom";
import Avatar from '@mui/material/Avatar';


export default function PersonCard({ person, action}) {

  return (
    <Card sx={{ maxWidth: 345 }}>
       <CardHeader
        title={
          <Typography variant="h5" component="p">
            {person.title}{" "}
          </Typography>
        }
      />
      
      <CardMedia
        sx={{ height: 500 }}
        image={
            person.image
            ? `https://image.tmdb.org/t/p/w500/${person.image}`
            : img
        }
      />
    
      <CardActions disableSpacing>
        {action(person)}
        <Link to={`/person/${person.id}`}>
          <Button variant="outlined" size="medium" color="primary">
            More Info ...
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}