import React from 'react'
import { useEffect } from 'react'
import Aos from "aos"
import "aos/dist/aos.css"
import { useSelector,useDispatch} from 'react-redux';
import arm from "../Pic/arm.png"
import eng from "../Pic/eng.png"
import { reload } from '../../Store/Index';

export default function ({topic}:any) {
    useEffect(()=>{
        Aos.init({duration:1500})
      },[])
      const text=useSelector((state:any)=>state.lang)
      const dispatch=useDispatch()

  return (
    <div className='burgMenu'  data-aos="flip-right" >
        <a href='#section' className='one' ><div>{text.about}</div> </a> 
        <a href='#section2'><div>{text.education}</div></a>
        <a href='#section3'><div>{text.skills}</div></a>
        <a href='#section4'><div>{text.project}</div></a>
        <a href='#footer'><div>{text.contact}</div></a>
        <div onClick={()=>dispatch(reload()
     )} ><span><img src={arm}/><img src={eng} /></span></div>
        <div className="top" onClick={topic}>Dark / Light</div>
    </div>
  )
}
