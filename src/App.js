import './App.css';

import React, { useState } from 'react'
import NavBar from './component/NavBar';
import News from './component/News';
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App = ()=> {
  const pageSize = 5;
  // const apiKey = "21698920a93a4a79972558059f903092"
  const apiKey = "c605b52475ef4d07940ae576312bf404"
  // const apiKey = "94e3ac9347374fa7a753f502b472393e"
  const [progress, setProgress] = useState(0)
 
    return (
      <div>
        <Router>
        <NavBar/> 
        <LoadingBar
        height={3}
        color='#f11946'
        progress={progress} 
      />
        <Routes>
          <Route path='*' element={<Navigate to="/"/>}/>
          <Route exact path="/"element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general"/>}></Route> 
          <Route exact path="/business"element={<News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={pageSize} country="in" category="business"/>}></Route> 
          <Route exact path="/entertainment"element={<News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={pageSize} country="in" category="entertainment"/>}></Route> 
          <Route exact path="/general"element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general"/>}></Route> 
          <Route exact path="/health"element={<News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={pageSize} country="in" category="health"/>}></Route> 
          <Route exact path="/science"element={<News setProgress={setProgress} apiKey={apiKey} key="science" pageSize={pageSize} country="in" category="science"/>}></Route> 
          <Route exact path="/sports"element={<News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={pageSize} country="in" category="sports"/>}></Route> 
          <Route exact path="/technology"element={<News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={pageSize} country="in" category="technology"/>}></Route> 
        </Routes>
        </Router>
      </div>
    )
 
}

export default App;