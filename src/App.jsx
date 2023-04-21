import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './Css/styles.css'
import Header from './Components/header.jsx'
import Series from './Components/series.jsx'


function App() {
  return (
    <div className="App">
       <Header/>
       <Series/>
    </div>
  )
}

export default App
