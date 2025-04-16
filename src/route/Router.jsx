import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SinglePage from '../pages/SinglePage'

export default function Router() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/single' element={<SinglePage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
