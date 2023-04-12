import React from "react";
import Sidebar from './Components/Sidebar/Sidebar'
import MainArea from './Components/MainArea/MainArea'
import ListNotes from './Components/ListNotes/ListNotes'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import DisplayNote from './Components/DisplayNote/DisplayNote'

function App() {
    return (
        <Router>
            <Sidebar />

            <Routes>
                <Route path="/" exact element={<ListNotes/>} />
                <Route path="/edit" exact element={<MainArea/>} />
                <Route path="/displayNote/:id" exact element={<DisplayNote/>} />
            </Routes>
        </Router>
    );
}

export default App;