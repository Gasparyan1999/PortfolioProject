import React from 'react'
import {GoPerson} from "react-icons/go"
import  {FaBirthdayCake,FaLaptopCode} from "react-icons/fa"
import {VscDebugContinueSmall} from "react-icons/vsc"
import { useEffect } from 'react'
import Aos from "aos"
import "aos/dist/aos.css"
import { useSelector} from 'react-redux';


export default function SectionOne() {
  const text=useSelector((state:any)=>state.lang)

  useEffect(()=>{
    Aos.init({duration:1500})
  },[])
  return (
       <div className='main' id='section'>
          <div className='text'>
          <ul data-aos="flip-right">
            <li data-aos="fade-up" ><GoPerson className='icon'/>{text.name}</li>
            <br></br>
            <li data-aos="fade-left"><FaBirthdayCake className='icon'/>{text.age}</li>
            <br></br>
            <li data-aos="fade-down"><FaLaptopCode className='icon'/>{text.exp}</li>
            <br></br>
            <li data-aos="fade-right"><VscDebugContinueSmall className='icon'/>{text.scroll}</li>
          </ul>
          </div>
          <div className='pic' data-aos="flip-left">
            <p>
              {text.aboutText}
            </p>
        </div>
        </div>

  )
}
