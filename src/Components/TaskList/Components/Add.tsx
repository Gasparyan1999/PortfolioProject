import React from 'react'

export default function Add({handleAdd}:any) {
  return (
    <div className='taskAdd'>
        <form action='#' onSubmit={handleAdd} >
             <input placeholder='Title' name='title' className='title' required />
             <input placeholder='Body' name='body' className='body' required />
             <button type='submit' className='buttonAdd'  >Add</button>
        </form>
    </div>
  )
}
