import React, { useState, useEffect } from "react";
import "./calculate.scss"
import Aos from "aos"
import "aos/dist/aos.css"
   
 export const Calc=()=>{

    useEffect(()=>{
        Aos.init({duration:3600})
         },[])
     const [item,setItem]=useState<string>(``)
     const func=(e:any)=>{
       if(e.target==e.currentTarget)return

        if(e.target.textContent=="*" || e.target.textContent=="/" || e.target.textContent=="+" ||e.target.textContent=="-"){
           if(item[item.length-1]=="*" || item[item.length-1]=="/" || item[item.length-1]=="+" || item[item.length-1]=="-"){
           setItem(item.slice(0,item.length-1) + e.target.textContent)
           }
              else{
                   setItem(item + e.target.textContent)
                  }
               }
           else if(e.target.textContent=="="){
           setItem(eval(item))
           return
               }
           else if(e.target.textContent=="."){
            if(item.includes("."))return
            if(item[item.length-1]=="." || item[item.length-1]=="*" || item[item.length-1]=="/" || item[item.length-1]=="+" || item[item.length-1]=="-"){return}
              else {
                setItem(item+e.target.textContent)
                  }

               }
           else if(e.target.textContent=="AC"){
            setItem("")
               }
           else if(e.target.textContent=="SQRT"){
            setItem(Math.sqrt(eval(item)).toString())
               }
           else if(e.target.textContent=="+/-"){
               if(item.length<1)return
            setItem(((-1)* eval(item)).toString())
               }
           else{
          setItem(item + e.target.textContent)
               }
     }

     return(

 <div className="containerCalc" onClick={func}> 
        <div className="monitor" data-aos="fade-left" data-aos-duration="1800" ><p>{item}</p></div>
        <div className="one" data-aos="fade-up" data-aos-duration="1600" ><p>1</p></div>
        <div className="two" data-aos="fade-left" data-aos-duration="1400" ><p>2</p></div>
        <div className="three" data-aos="fade-right" data-aos-duration="1800" ><p>3</p></div>
        <div className="four" data-aos="fade-down" data-aos-duration="1650" ><p>4</p></div>
        <div className="five" data-aos="fade-right" data-aos-duration="1600" ><p>5</p></div>
        <div className="six" data-aos="fade-up" data-aos-duration="1600" ><p>6</p></div>
        <div className="seven" data-aos="fade-down" data-aos-duration="1850" ><p>7</p></div>
        <div className="eight" data-aos="fade-left" data-aos-duration="1700" ><p>8</p></div>
        <div className="nine" data-aos="fade-right" data-aos-duration="1650" ><p>9</p></div>
        <div className="zero" data-aos="fade-right" data-aos-duration="1710" ><p>0</p></div>
        <div className="plus" data-aos="fade-up" data-aos-duration="1600" ><p>+</p></div>
        <div className="minus" data-aos="fade-right" data-aos-duration="1750" ><p>-</p></div>
        <div className="multiply" data-aos="fade-down" data-aos-duration="1680" ><p>*</p></div>
        <div className="divide" data-aos="fade-down" data-aos-duration="1710" ><p>/</p></div>
        <div className="equals" data-aos="fade-left" data-aos-duration="1650" ><p>=</p></div>
        <div className="dot" data-aos="fade-right" data-aos-duration="1660" ><p>.</p></div>
        <div className="ac" data-aos="fade-down" data-aos-duration="1800" ><p>AC</p></div>
        <div className="percent" data-aos="fade-left" data-aos-duration="1600" ><p>+/-</p></div>
        <div className="sign" data-aos="fade-right" data-aos-duration="1710" ><p>SQRT</p></div>
</div>
     )
 }