import React from 'react'

export default function Person({name,user,mail,phone,id,num,block,del}:any) {
  return (
    <div className='person'>
        <div><h3>{num}</h3><span>{name}</span></div>
        <div className='user' ><span>{user}</span></div>
        <div className='mail' ><span>{mail}</span></div>
        <div><span>{phone}</span></div>
        <div><button id={id} onClick={block}>Edit</button><button id={id} onClick={del}>Delete</button></div>
    </div>
  )
}
