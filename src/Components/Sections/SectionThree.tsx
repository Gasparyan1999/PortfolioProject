import React, { useEffect } from 'react'
import { Calc } from '../Calculate/calculate'
import Aos from "aos"
import "aos/dist/aos.css"


export default function SectionThree() {


  useEffect(()=>{
    Aos.init({duration:3600})
  },[])

  return (
    <div className='mainThree'id='section3' >
        <div className='text'>
          <ul>
            <li  data-aos="fade-left" data-aos-duration="1000" >HTML,CSS(SASS)</li>
            <li   data-aos="fade-right" data-aos-duration="1300">React+Redux(TypeScript)</li>
            <li    data-aos="fade-left" data-aos-duration="1300">Russian language</li>
            <li    data-aos="fade-right" data-aos-duration="1900">English language(Learning now)</li>
            <li  data-aos="fade-left" data-aos-duration="2200" >Communication skill</li>
            <li  data-aos="fade-right" data-aos-duration="2500" >TeamWork</li>
          </ul>
          </div>
          <div className='pic'>
           <Calc />  
        </div>
    </div>
  )
}
