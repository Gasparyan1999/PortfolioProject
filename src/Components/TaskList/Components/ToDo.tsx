import React from 'react'

export default function ToDo({title,body,num,move,id,del,edit}:any) {
  return (
      <div className='todoElem'  >
        <div className='num'><h4>{num}</h4></div>
        <div className='todoTitle'>
          <h2>{title}</h2>
        </div>
        <div className='todoBody'>
          <h3>{body}</h3>
        </div>
        <div className='todoIcon'>
             <button id={id} onClick={del} className="one">Delete</button>  <button onClick={edit} className="one" id={id} >Edit</button> <button  onClick={move} id={id}>Doing</button>
        </div>   
        </div>    

  )
}
