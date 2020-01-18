import React from 'react';
import './App.css';
import CallApi from "./CallApi/CallApi";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./CallApi/Header/Header";
import Loader from "react-loader-spinner";

function App() {
  return (

    <div className="App">


        <Header/>

        <CallApi/>
    </div>
  );
}

export default App;
