import React from 'react'
import { useState } from 'react'
export default function Edit({close,edit,name,user,phone,mail}:any) {

  const [text,setText]=useState({name:name,user:user,phone:phone,mail:mail})
  const changeA=(e:any)=>{
     setText({name:e.target.value,user:text.user,phone:text.phone,mail:text.mail})
  }
  const changeB=(e:any)=>{
    setText({name:text.name,user:e.target.value,phone:text.phone,mail:text.mail})
  }
  const changeC=(e:any)=>{
    setText({name:text.name,user:text.user,phone:e.target.value,mail:text.mail})
  }
  const changeD=(e:any)=>{
    setText({name:text.name,user:text.user,phone:text.phone,mail:e.target.value})
  }

  return (
    <>
    <div className='personAdd'>
    <form action='#' onSubmit={edit} >
         <input placeholder='Name' name='name' className='name' value={text.name} onChange={changeA} />
         <input placeholder='UserName' name='user' className='user' value={text.user} onChange={changeB} />
         <input placeholder='Email' name='mail' className='mail'  value={text.mail} onChange={changeD}  />
         <input placeholder='Phone' name='phone' className='phone'  value={text.phone} onChange={changeC}  />
         <button type='submit' className='buttonAdd'>Edit</button>
         <br></br>
         <button onClick={close}>Close</button>
    </form>
</div>
</>
  )
}
