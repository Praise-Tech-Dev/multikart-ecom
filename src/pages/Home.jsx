import React from 'react'
import Header from '../components/Header'
import Banner from '../components/Banner'
import Catalogue from '../components/Catalogue'
import TopCollection from '../components/TopCollection'
import FashionTrend from '../components/FashionTrend'
import SpecialProducts from '../components/SpecialProducts'
import Service from '../components/Service'


export default function Home() {
  return (
    <div className=''>
      <Header/>
      <Banner/>
      <Catalogue/>
      <TopCollection/>
      <FashionTrend/>
      <SpecialProducts/>
      <Service/>
    </div>
  )
}
