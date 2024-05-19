# react-movies-labs

This repo is for Labs and Assignments in Web App Development 2

## Assignment 2

When running the app, ensure to run both the movies-api (which will run on localhost:8080) and the movies (which will be on localhost:3000) using npm start

Completed labs 9 to 12, they are uploaded as wad-api-labs-2024

Added movies-api that was worked on in lab 12 a

Added log in or sign up, making a user log in before accessing any page using route protection.

Signing up adds the user to the mongo atlas db

Made the app request movies through the movies api rather than the tmdb api, original had the discover page display the movies stored in mongodb but I later changed it.

Made the app request as many of the api requests through the movies api rather than the tmdb api, this includes Movies, Genre, Upcoming, TopRated, NowPlaying, PopularPeople

Attempted to add another collection of favourites to mongo atlas, the plan was to have it be user specific favourites but I ran out of time.




## Completed Labs

All class labs have been complete up to week 8.

### Assignment 1

Assignment one (extending the app beyond week 8).

I have added a "Top Rated" movies page, displaying the top rated movies from TMDB.

I have also added a "Popular Actors" page to display current popular actors, this was accomplished using the trending people api.

On the "Popular Actors" page, I built cards of the actors, using the movies cards from the labs as a template. Clicking on more info will bring you into the person details page, giving a biography of the actor, some quick info, and what movies they have appeared in.

I also added the cast members to the movie detail page.

I then added a link to the cast members in the movie page, that when you clicked on them, it would bring you to the correct person details page, and then the opposite on the person details page to link you to the movie.

Material ui Carousel has been added for the images on the movie details page to tidy the page up.

Now Playing was also added.

Minor fixes such as spacing, and adding a colour to the movie and actor chips when hovered over

Attempted to add Firebase for authentication, however I was unable to get it working, I have upladed the files that I tried to get working but have commented them out in the routes folder.

As a part of the Firebase tutorial I was following I installed bootstrap to style some of the pages.

The tutorial I used for Firebase was https://hackernoon.com/how-to-set-up-firebase-authentication-with-react along with some youtube tutorials.

I also used TMDBs api guides at https://developer.themoviedb.org/docs/getting-started for the project along with a TMDB API documentation which I found at https://www.postman.com/devrel/workspace/tmdb-api/documentation/13191452-e12a1487-f709-47b4-9f55-c11c8e0daea2 