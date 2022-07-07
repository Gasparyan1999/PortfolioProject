import React, { useEffect, useState } from 'react'
import { cursorTo, Interface } from 'readline'
import "./Book.scss"
import Add from './Components/Add'
import Edit from './Components/Edit'
import Person from './Components/Person'

if(!localStorage.getItem("personId")){
    localStorage.setItem("personId","11")
}
export default function Book() {
    const [edd,setEdd]=useState<{bool:boolean,id:number,name:string,user:string,phone:string,mail:string}>({bool:false,id:0,name:"",phone:"",mail:"",user:""})    
    const [person,setPerson]=useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => {
                if(!localStorage.getItem("person")){
                    localStorage.setItem("person",JSON.stringify(data))
                }
                const userJson = localStorage.getItem('person');
                const currentUser = userJson !== null ? JSON.parse(userJson) : [];
                 setPerson( currentUser)
            })
    },[])

    const handleAdd=(e:any)=>{
        e.preventDefault()
        const add=[...Array.from(new FormData(e.target))]
        const id = localStorage.getItem('id');
        const currentId = id !== null ? JSON.parse(id) : [];
        const userJson = localStorage.getItem('person');
        const currentUser = userJson !== null ? JSON.parse(userJson) : [];
        localStorage.setItem("person",JSON.stringify([...currentUser,{name:add[0][1],username:add[1][1],email:add[2][1],phone:add[3][1],id:localStorage.getItem("personId")}]))
        localStorage.setItem("personId", currentId+1)
        const personJson = localStorage.getItem('person');
        const currentPerson = personJson !== null ? JSON.parse(personJson) : [];
        setPerson(currentPerson)
    }
    const editBlock=(e:any)=>{
        let name:string=""
        let user:string=""
        let phone:string=""
        let mail:string=""
        person.forEach((elem:any)=>{
            if(e.target.id==elem.id){
                name=elem.name
                user=elem.username
                phone=elem.phone
                mail=elem.email
            }
        })
        setEdd({bool:true,id:e.target.id,name:name,user:user,phone:phone,mail:mail})
    }
    const close=(e:any)=>{

        setEdd({bool:false,id:edd.id,user:edd.user,phone:edd.phone,name:edd.name,mail:edd.mail})
    }
    const handleEdit=(e:any)=>{
        e.preventDefault()
        const ed=[...Array.from(new FormData(e.target))]
        const arr:any[]=[]
        const personJson = localStorage.getItem('person');
        const currentPerson = personJson !== null ? JSON.parse(personJson) : [];
            currentPerson.forEach((elem:any)=>{    
                 if(edd.id==elem.id){
                    elem.name=ed[0][1]
                    elem.username=ed[1][1]
                    elem.email=ed[2][1]
                    elem.phone=ed[3][1]
                 }
                 arr.push(elem)
              })
              localStorage.setItem("person",JSON.stringify(arr))
              const EddPersonJson = localStorage.getItem('person');
              const currentEddPerson = EddPersonJson !== null ? JSON.parse(EddPersonJson) : [];
              setPerson(JSON.parse(currentEddPerson))
    }
    const handleDel=(e:any)=>{
        const arr:any[]=[]
        const personJson = localStorage.getItem('person');
        const currentPerson = personJson !== null ? JSON.parse(personJson) : [];
        currentPerson.forEach((elem:any)=>{       
            if(e.target.id!=elem.id){
                arr.push(elem)
            }
         })
         localStorage.setItem("person",JSON.stringify(arr))
         const delPersonJson = localStorage.getItem('person');
         const currentDelPerson = delPersonJson !== null ? JSON.parse(delPersonJson) : [];
         setPerson(currentDelPerson)
    }

  return (
    <>
    <div className='personMain'>
        {person.map((elem:any,index:number)=>{
            return <Person key={elem.id} num={index+1} id={elem.id} name={elem.name} user={elem.username} mail={elem.email} phone={elem.phone} block={editBlock} del={handleDel} />
        })}
    </div>
    {!edd.bool && <Add add={handleAdd} />}
    <br></br>
    <br></br>
    {edd.bool && <Edit close={close} edit={handleEdit} name={edd.name} user={edd.user} phone={edd.phone} mail={edd.mail} />}
    </>
  )
}
