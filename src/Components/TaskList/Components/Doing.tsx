import React from 'react'
export default function Doing({num,title,body,id,over,del,down,edit}:any) {
  return (
   
    <div className='todoElem'>
    <div className='num'><h4>{num}</h4></div>
    <div className='todoTitle'>
      <h2>{title}</h2>
    </div>
    <div className='todoBody'>
      <h3>{body}</h3>
    </div>
    <div className='todoIcon'>
    <button id={id} onClick={del} className="two">Delete</button> <button onClick={edit} id={id} className="two" >Edit</button>  <button onClick={down} id={id} >To Do</button>  <button  id={id} onClick={over}>Complite</button>
    </div>   
    </div>   
  
  )
}
