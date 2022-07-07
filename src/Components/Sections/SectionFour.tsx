import React, { useState,useRef,useReducer, Children } from 'react'
import { useEffect } from 'react'
import Aos from "aos"
import "aos/dist/aos.css"
import Task from "../TaskList/Task"
import Book from "../Phonebook/Book"
import {BiRightArrow,BiLeftArrow} from "react-icons/bi"
import Game from '../Game/Game'



export default function SectionFour() {
  let active=0
  const slider=useRef(null)
  useEffect(()=>{
    Aos.init({duration:1200})
  },[])
   
  const left=()=>{
    if(active!=0)active++
    else if(active==0) active=-2
    if(slider.current!==null){
    Array.from(slider.current["children"]).map((elem:any)=>{
      elem.style=`transform:translateX(${active *100}%)`
    })
  }
  
  }
  const right=()=>{
    if(active!=-2)active--
    else if(active==-2) active=0

    if(slider.current!==null){
      Array.from(slider.current["children"]).map((elem:any)=>{
        elem.style=`transform:translateX(${active *100}%)`
      })
    }
  }

  return (
        <div className='mainFour' id='section4' >
         <div className='buttonRight' onClick={left}><BiLeftArrow></BiLeftArrow></div> 
          <div className='text' data-aos="fade-down-right" ref={slider} >
          <div className='itemThree' >
               <Game />
            </div>
            <div className='itemOne'>
               <Task/>
            </div>
            <div className='itemTwo'>
               <Book/>
            </div>
          </div>
          <div className='buttonLeft' onClick={right}><BiRightArrow></BiRightArrow></div>
        </div>
  )
}

