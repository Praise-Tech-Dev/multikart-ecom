import React from 'react'
import Header from '../components/Header'
import Banner from '../components/Banner'
import Catalogue from '../components/Catalogue'
import TopCollection from '../components/TopCollection'


export default function Home() {
  return (
    <div className=''>
      <Header/>
      <Banner/>
      <Catalogue/>
      <TopCollection/>
    </div>
  )
}
