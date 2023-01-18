// import logo from './logo.svg';
// import './App.css';

import Navbar from './component/Navbar';

import React, { useState } from 'react';
import News from './component/News';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';
const App =()=> {
  const pageSize =5
  
const [progress, setProgress]= useState(0)
  
    
    return (
      
 <>
 
<BrowserRouter>
<Navbar/>
<LoadingBar
        color='#f11946'
        progress={progress}
        
      />
<Routes>
        <Route exact path="/" element={ <News setProgress={setProgress}  pageSize={pageSize} key='business' catagory='business'/>} />
        <Route exact path="/science" element={<News setProgress={setProgress} pageSize={pageSize} key='science'  catagory='science'/>} />
        <Route exact path="/sports" element={<News setProgress={setProgress}  pageSize={pageSize} key='sports' catagory='sports'/>} />
        <Route exact path="/technology" element={<News setProgress={setProgress} pageSize={pageSize} key='technology' catagory='technology'/>} />
</Routes>
</BrowserRouter>
     
    
    

      </>
  
    )
  }


export default App


