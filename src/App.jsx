import './App.css'
import {BrowserRouter, Routes, Route} from  'react-router-dom'
import Home from './pages/Home'

import { useState  } from 'react'

function App() {

  return (
    <div className="App">
            
     <BrowserRouter>
              <Routes>
                  <Route exact path='/' element={<Home/>}/>
              </Routes>
      </BrowserRouter>
        
    </div>
  )
}

export default App
