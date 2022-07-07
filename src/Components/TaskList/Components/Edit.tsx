import React, { useState } from 'react'

export default function Edit({edit,get,title,body}:any) {
  const [text,setText]=useState({title:title,body:body})
  const change=(e:any)=>{
     setText({title:e.target.value,body:text.body})
  }
  const changeB=(e:any)=>{
    setText({title:text.title,body:e.target.value})
  }
  return (
    <div className='taskAdd'>
      <button onClick={edit} >Close</button>
    <form action='#' onSubmit={get} >
         <input placeholder='Title' name='title' className='title' required value={text.title} onChange={change} />
         <input placeholder='Body' name='body' className='body' required value={text.body} onChange={changeB} />
         <button type='submit' className='buttonAdd' >Edit</button>
    </form>
    </div>
  )
}
