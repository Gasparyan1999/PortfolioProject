import React from 'react'

export default function Add({add}:any) {
  return (
    <div className='personAdd'>
        <form action='#' onSubmit={add} >
             <input placeholder='Name' name='name' className='name' required />
             <input placeholder='UserName' name='user' className='user' required/>
             <input placeholder='Email' name='mail' className='mail' required/>
             <input placeholder='Phone' name='phone' className='phone' required/>
             <button type='submit' className='buttonAdd'>Add</button>
        </form>
    </div>
  )
}
