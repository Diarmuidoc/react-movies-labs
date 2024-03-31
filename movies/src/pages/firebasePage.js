import { useState } from "react";
import Layout from '../components/firebaseLayout';
import Login from '../components/firebaseLogin';
import SignUp from '../components/firebaseSignUp';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Firebase = () => {

    

    return(
        
        <BrowserRouter>
      <Routes>
          <Route path = "/" element = { <Layout></Layout> }>
            <Route index element = { <Login></Login> }></Route>
            <Route path = "/signup" element = { <SignUp></SignUp> } ></Route>
          </Route>
      </Routes>
    </BrowserRouter>
        
    )

}

export default Firebase;






