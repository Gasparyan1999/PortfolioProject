import React from 'react'
import certificate from "../Pic/certificate.png"
import  {FaUniversity} from "react-icons/fa"
import {IoIosSchool} from "react-icons/io"
import { useEffect } from 'react'
import Aos from "aos"
import "aos/dist/aos.css"
import { useSelector} from 'react-redux';

export default function SectionTwo() {
  useEffect(()=>{
    Aos.init({duration:1200})
  },[])

  const text=useSelector((state:any)=>state.lang)

  return (
      <div className='mainTwo' id='section2' >
        <div className='text' data-aos="fade-down-right" >
          <ul>
            <li data-aos="flip-up" ><FaUniversity/>{text.uni}</li>
            <br></br>
            <br></br>
            <li data-aos="flip-down" ><IoIosSchool/>{text.smart}</li>
          </ul>
          </div>
          <div className='pic' data-aos="fade-up-left">
            <img src={certificate} />
          </div>
        </div>
  )
}
