import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SinglePage from '../pages/SinglePage'
import Home from '../pages/Home'

export default function Router() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/single/:id' element={<SinglePage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
