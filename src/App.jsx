// import { useState } from 'react'


import './App.scss'
import './index.scss'
import { app } from './utils/firebase'
import { Navigation } from './router/navigation/navigation'
import { Home } from './router/home/home'
import { Auth } from './router/auth/auth'




export function App() {
  // console.clear()
  // console.log(app)
  return (
    //Tags vazias para não ser a principal da aplicação quando for o caso
    <>

      <Navigation />
     {/* <Home/> */}
     <Auth/>
    </>
  )
}


