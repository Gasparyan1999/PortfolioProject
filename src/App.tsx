import React, {useRef, useState} from 'react'
import { useSelector,useDispatch } from 'react-redux';
import "./App.scss"
import "./AppL.scss"
import Header from './Components/Sections/Header'
import SectionOne from './Components/Sections/SectionOne'
import SectionThree from './Components/Sections/SectionThree'
import SectionTwo from './Components/Sections/SectionTwo'
import SectionFour from './Components/Sections/SectionFour'
import Footer from './Components/Sections/Footer'
import Over from './Components/Sections/Over'
import Burg from './Components/Sections/Burg'

if(!localStorage.getItem("topic")){
  localStorage.setItem("topic","dark")
}
function App() {

  const [burg,setBurg]=useState(false)
  const [top,setTop]=useState(localStorage.getItem("topic")=="dark"?"dark":"light")

  const handleTopic=()=>{
    if(localStorage.getItem("topic")=="dark"){
      localStorage.setItem("topic","light")
      setTop("light")
    }

    else {
      localStorage.setItem("topic","dark")
      setTop("dark")
  }
 
}
const handleBurg=()=>{
  setBurg(!burg)
 }
  return (
    <div className={top}>
       { burg && <Burg topic={handleTopic} /> }
        <Header burger={burg}  burg={handleBurg} topic={handleTopic} />
        <SectionOne  />
        <SectionTwo />
        <SectionThree/>
        <SectionFour />
        <Footer />
        <Over/>
    </div>
  );
}

export default App;
