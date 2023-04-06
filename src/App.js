import logo from './logo.svg';
import React from "react";
import Sidebar from './Components/Sidebar/Sidebar'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <Router>
        <Sidebar />

        
    </Router>
  );
}

export default App;
