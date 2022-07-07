import React from 'react'

export default function Done({num,title,body,id,del,left,edit}:any) {
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
    <button id={id} onClick={del} className="three">Delete</button> <button onClick={edit} id={id} className="three" >Edit</button> <button id={id} className="left" onClick={left} >Doing</button>
    </div>   
    </div>
      
  )
}
