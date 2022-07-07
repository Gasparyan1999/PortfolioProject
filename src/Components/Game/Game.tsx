import React, { useRef } from 'react'
import "./Game.scss"
import { useSelector} from 'react-redux';

export default function Game() {
  const text=useSelector((state:any)=>state.lang)
  const arr:string[]=["set1","set2","set3","set4","set5","set6","set7","set8","set9","setM0","setM1","setM2"]
  const newArr:string[]=[]
  const finalArr:string[]=[]
  let game:number =0
  let move:number=0
  let x:string=""
  let z:string=""
  let y:string=""
  const ref=useRef<HTMLHeadingElement>(null)
  let count:number=11
   while(count>0){
    let str:string=""
    let x:number=0
    x=Math.floor(Math.random()*count)
    str+=arr[x]
    arr.splice(x,1)
    count--
    x=Math.floor(Math.random()*count)
    str+=arr[x]
    arr.splice(x,1)
    newArr.push(str)
    count--
   }
   
    const click=(e:any)=>{
        if(e.target==e.currentTarget || finalArr.includes(e.target.id) || game==2 || e.target.className=="options")return
        game++
        if(move==0) z=e.target.id
        y=e.target.id
         function func(){
          game=0
          if (null !==ref.current){
          Array.from(ref.current.children).forEach((elem:any)=>{
            if(elem.id==z || elem.id==y ){
              if(!finalArr.includes(y)){
              elem.style="background-color:none;"
              }
            }
          })
        }
         }
        
        move++
        newArr.forEach((elem,index)=>{
          if(elem.includes(e.target.id)){
            if(index==0){
            e.target.style="background-color:red"
            if(move==1) x=e.target.id
            if(move==2){
             if(newArr.includes(x+e.target.id) || newArr.includes(e.target.id+x)){
              finalArr.push(x,e.target.id)      
              move=0
              x=""
              game=0
             }
             else{
              setTimeout(func,500)
              x=""
              move=0
             }
            }
            return
            }
            else if(index==1){
              e.target.style="background-color:green"
              if(move==1) x=e.target.id
              if(move==2){
               if(newArr.includes(x+e.target.id) || newArr.includes(e.target.id+x)){
                finalArr.push(x,e.target.id)
                move=0
                x=""
                game=0
               }
               else{
                setTimeout(func,500)
                x=""
                move=0
               }
              }
              return
            }
            else if(index==2){
              e.target.style="background-color:yellow"
              if(move==1) x=e.target.id
              if(move==2){
               
               if(newArr.includes(x+e.target.id) || newArr.includes(e.target.id+x)){
                finalArr.push(x,e.target.id)
                move=0
                x=""
                game=0
               }
               else{
                setTimeout(func,500)
                x=""
                move=0
               }
              }
              return
            }
            else if(index==3){
              e.target.style="background-color:blue"
              if(move==1) x=e.target.id
              if(move==2){
         
               if(newArr.includes(x+e.target.id) || newArr.includes(e.target.id+x)){
                finalArr.push(x,e.target.id)
                move=0
                x=""
                game=0
               }
               else{
                setTimeout(func,500)
                x=""
                move=0
               }
              }
              return
            }
            else if(index==4){
              e.target.style="background-color:pink"
              if(move==1) x=e.target.id
              if(move==2){
     
               if(newArr.includes(x+e.target.id) || newArr.includes(e.target.id+x)){
                finalArr.push(x,e.target.id)
                move=0
                game=0
                x=""
               }
               else{
                setTimeout(func,500)
                x=""
                move=0
               }
              }
              return
            }
            else if(index==5){
              e.target.style="background-color:aqua"
              if(move==1) x=e.target.id
              if(move==2){

               if(newArr.includes(x+e.target.id) || newArr.includes(e.target.id+x)){
                finalArr.push(x,e.target.id)
                move=0
                game=0
                x=""
               }
               else{
                setTimeout(func,500)
                x=""
                move=0
               }
              }
              return
            }
          }
        })
    }
    const refresh=()=>{
    }

  return (
    <span>
    <div className='gameContainer' onClick={click} ref={ref} >
        <div id='set1'  ></div>
        <div id='set2' ></div>
        <div id='set3' ></div>
        <div id='set4' ></div>
        <div id='set5' ></div>
        <div id='set6' ></div>
        <div id='set7' ></div>
        <div id='set8' ></div>
        <div id='set9' ></div>
        <div id='setM0' ></div>
        <div id='setM1' ></div>
        <div id='setM2' ></div>
    </div>
    <h3>{text.option}</h3>
    </span>
  )
}
