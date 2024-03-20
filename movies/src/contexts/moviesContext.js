//
//Exercise 3 lab 8, 
//
import React, { useState } from "react";

export const MoviesContext = React.createContext(null);

const MoviesContextProvider = (props) => {
  const [favorites, setFavorites] = useState( [] )
  const [myReviews, setMyReviews] = useState( {} )
  const [watchlist, setWatchlist] = useState( [] )

  const addToFavorites = (movie) => {
    let newFavorites = [];
    if (!favorites.includes(movie.id)){
      newFavorites = [...favorites, movie.id];
    }
    else{
      newFavorites = [...favorites];
    }
    console.log(newFavorites);
    setFavorites(newFavorites);
  };


  const addReview = (movie, review) => {
    setMyReviews( {...myReviews, [movie.id]: review } )
  };
  //console.log(myReviews);

  
  const addToWatchlist = (movie) => {
    let newWatchlist = [];
    if (!watchlist.includes(movie.id)){
      newWatchlist = [...favorites, movie.id];
    }
    else{
      newWatchlist = [...favorites];
    }
    setWatchlist(newWatchlist);
    //to check if movies are getting added to watchlist
    console.log(newWatchlist);
  };


  // We will use this function in a later section
  const removeFromFavorites = (movie) => {
    setFavorites( favorites.filter(
      (mId) => mId !== movie.id
    ) )
  };

   return (
    <MoviesContext.Provider
      value={{
        favorites,
        addToFavorites,
        watchlist,
        addToWatchlist,
        removeFromFavorites,
        addReview,
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;