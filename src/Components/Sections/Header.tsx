import React, { useEffect, useState } from 'react'
import logo from "../Pic/logo3.png"
import "../../.d"
import {FaHamburger} from "react-icons/fa"
import {IoMdCloseCircleOutline} from "react-icons/io"
import { useSelector,useDispatch} from 'react-redux';
import { reload } from '../../Store/Index'
import arm from "../Pic/arm.png"
import eng from "../Pic/eng.png"


export default function Header({burger,burg,topic}:any) {

  const text=useSelector((state:any)=>state.lang)
  const dispatch=useDispatch()
  return (
    <>
    <div className="header" >
      <div className='logo'>
        <img className='logImg' src={logo} />
      </div>
       <div className='burg' onClick={burg} >{!burger?<FaHamburger></FaHamburger>:<IoMdCloseCircleOutline></IoMdCloseCircleOutline>}</div> 
      <div className='nav'>
        <a  className='elem' href='#section'>
        <div id="about" ><p id="about">{text.about}</p></div>
        </a>
        <a className='elem' href='#section2'>
        <div id="edu"><p id="edu">{text.education}</p></div>
        </a>
        <a href='#section3'  className='elem'>
        <div id="skill"><p id='skill'>{text.skills}</p></div>
        </a>
        <a className='elem' href='#section4'>
        <div id="pro" ><p id='pro'>{text.project}</p></div>
        </a>
        <a className='elem' href='#footer'>
        <div id="cont" ><p id='cont'>{text.contact}</p></div>
        </a>
        <div id="lang" className='lang' onClick={()=>dispatch(reload()
     )} ><img src={arm}/><img src={eng} /></div>
        <div id="lang" className='topic' onClick={topic} ><p id='lang'>Dark / Light</p></div>
      </div>

    </div>
    </>
  )
}
