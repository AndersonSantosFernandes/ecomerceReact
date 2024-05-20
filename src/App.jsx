// import { useState } from 'react'

import './App.scss'
import './index.scss'
import { app } from './utils/firebase'
import { Navigation } from './router/navigation/navigation'

export function App() {
  // console.clear()
  // console.log(app)
  return (
    //Tags vazias para não ser a principal da aplicação quando for o caso
    <>

      <Navigation />

    </>
  )
}


