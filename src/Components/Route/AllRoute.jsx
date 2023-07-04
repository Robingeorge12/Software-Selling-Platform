import React from 'react'
import {Routes,Route} from "react-router-dom"
import HomePage from '../HomePage/HomePage'
import Header from '../Header/Header'
import FilterHeader from '../FilterHeader/FilterHeader'
import Gif from "../GifFolder/Gif"
import SearchProduct from '../SearchProduct/SearchProduct'


function AllRoute() {

  return (
    <div> 
        
       <Routes>
<Route path="/" element={<HomePage />} />
<Route path="/filterheader" element={<FilterHeader />} />
<Route path="/searchproduct" element={<SearchProduct />} />

<Route path="/gif" element={<Gif />} />

       </Routes>

    </div>
  )
}

export default AllRoute