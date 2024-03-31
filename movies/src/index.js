import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Navigate, Routes} from "react-router-dom";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import FavoriteMoviesPage from "./pages/favoriteMoviesPage";
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from './components/siteHeader';
import Upcoming from './pages/upcomingPage';
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools';
import MoviesContextProvider from "./contexts/moviesContext";
import AddMovieReviewPage from './pages/addMovieReviewPage';

//a1
import TopRated from './pages/topRatedPage';
import NowPlaying from './pages/nowPlayingPage';
import PeoplePopular from "./pages/peoplePopularPage";
import PersonPage from "./pages/personDetailsPage";
// import Firebase from "./pages/firebasePage";
// import Layout from './components/firebaseLayout'
// import Login from './components/firebaseLogin';
// import SignUp from './components/firebaseSignUp';
// import Profile from './components/firebaseProfile'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000, 
      refetchOnWindowFocus: false
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <SiteHeader />
        <MoviesContextProvider>
        <Routes>
        {/* <Route path = "/" element = { <Layout /> } />
            <Route index element = { <Login /> } />
            <Route path = "/signup" element = { <SignUp /> } />
            <Route path = "/profile" element = { <Profile /> } /> */}
          <Route path="/movies/favorites" element={<FavoriteMoviesPage />} />
          <Route path="/reviews/:id" element={ <MovieReviewPage /> } />
          <Route path="/movies/:id" element={<MoviePage />} />
          <Route path="/movies/upcoming" element={<Upcoming />} />
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={ <Navigate to="/" /> } />
          <Route path="/reviews/form" element={ <AddMovieReviewPage /> } />
          <Route path="/movies/topRated" element={<TopRated />} />
          <Route path="/movies/nowPlaying" element={<NowPlaying />} />
          <Route path="/people/peoplePopular" element={<PeoplePopular />} />
          <Route path="/people/:id" element={<PersonPage />} />
        </Routes>
        </MoviesContextProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

const rootElement = createRoot( document.getElementById("root") )
rootElement.render(<App />);