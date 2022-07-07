import React, { useState } from 'react'
import Add from './Components/Add'
import Doing from './Components/Doing'
import Done from './Components/Done'
import Edit from './Components/Edit'
import ToDo from './Components/ToDo'
import "./Task.scss"

      if(!localStorage.getItem("taskOne")){
        localStorage.setItem("taskOne",JSON.stringify([]))
      }  
      if(!localStorage.getItem("taskTwo")){
        localStorage.setItem("taskTwo",JSON.stringify([]))
      }  
      if(!localStorage.getItem("taskThree")){
        localStorage.setItem("taskThree",JSON.stringify([]))
      }  
      if(!localStorage.getItem("id")){
        localStorage.setItem("id","1")
      }  

export default function Task() {
    const listOneJson = localStorage.getItem('taskOne');
    const currentListOneJson = listOneJson !== null ? JSON.parse(listOneJson) : [];
    const [listOne,setListOne]=useState(currentListOneJson)

    const listTwoJson = localStorage.getItem('taskTwo');
    const currentListTwoJson = listTwoJson !== null ? JSON.parse(listTwoJson) : [];
    const [listTwo,setListTwo]=useState(currentListTwoJson)
    
    const listThreeJson = localStorage.getItem('taskThree');
    const currentListThreeJson = listThreeJson !== null ? JSON.parse(listThreeJson) : [];
    const [listThree,setListThree]=useState(currentListThreeJson)

    const [edit,setEdit]=useState({bool:false,cls:"",num:0,title:"",body:""})

    const handleAdd=(e:any)=>{
        e.preventDefault()
        const add:any=[...Array.from(new FormData(e.target))]
        const listOneJson = localStorage.getItem('taskOne');
        const currentListOneJson = listOneJson !== null ? JSON.parse(listOneJson) : [];
        localStorage.setItem("taskOne",JSON.stringify([...currentListOneJson,{
            title:add[0][1],
            body:add[1][1],
            id:localStorage.getItem("id"),
        }]))
        const idJson = localStorage.getItem('id');
        const currentIdJson = idJson !== null ? JSON.parse(idJson) : [];
        localStorage.setItem("id",`${+currentIdJson +1}`)
        const newListOneJson = localStorage.getItem('taskOne');
        const newCurrentListOneJson = newListOneJson !== null ? JSON.parse(newListOneJson) : [];
        setListOne(newCurrentListOneJson)
        
}
    const posMove=(e:any)=>{
       const arr:any[]=[]
       if(e.target.className=="left"){
        const listJson = localStorage.getItem('taskThree');
        const currentListJson = listJson !== null ? JSON.parse(listJson) : [];
       currentListJson.forEach((elem:any)=>{       
            if(e.target.id==elem.id){
                const listOneJson = localStorage.getItem('tasktwo');
                const currentListOneJson = listOneJson !== null ? JSON.parse(listOneJson) : [];
                localStorage.setItem("taskTwo",JSON.stringify([...currentListOneJson,elem]))
            }
            else{
                arr.push(elem)
            }
         })
         localStorage.setItem("taskThree",JSON.stringify([...arr]));
         setListThree([...arr])

       }
       else{
        const listJson = localStorage.getItem('taskOne');
        const currentListJson = listJson !== null ? JSON.parse(listJson) : [];
            currentListJson.forEach((elem:any)=>{       
            if(e.target.id==elem.id){
                const listJson = localStorage.getItem('taskTwo');
                const currentListJson = listJson !== null ? JSON.parse(listJson) : [];
                localStorage.setItem("taskTwo",JSON.stringify([...currentListJson,elem]))
            }
            else{
                arr.push(elem)
            }
         })
         localStorage.setItem("taskOne",JSON.stringify([...arr]))
         setListOne([...arr])
        }
        const listJson = localStorage.getItem('taskTwo');
        const currentListJson = listJson !== null ? JSON.parse(listJson) : [];
        setListTwo(currentListJson)
        
    }
    const complite=(e:any)=>{
        const arr:any[]=[]
        const listJson = localStorage.getItem('taskTwo');
        const currentListJson = listJson !== null ? JSON.parse(listJson) : [];
        currentListJson.forEach((elem:any)=>{       
             if(e.target.id==elem.id){
                const listJson = localStorage.getItem('taskThree');
                const currentListJson = listJson !== null ? JSON.parse(listJson) : [];
                localStorage.setItem("taskThree",JSON.stringify([...currentListJson,elem]))
             }
             else{
                 arr.push(elem)
             }
          })
          localStorage.setItem("taskTwo",JSON.stringify([...arr]))
 
         setListTwo([...arr])
         const newListJson = localStorage.getItem('taskThree');
         const currentNewListJson = newListJson !== null ? JSON.parse(newListJson) : [];
         setListThree(currentNewListJson)

    }
    const toDo=(e:any)=>{
        const arr:any[]=[]
        const listJson = localStorage.getItem('taskTwo');
        const currentListJson = listJson !== null ? JSON.parse(listJson) : [];
          currentListJson.forEach((elem:any)=>{       
             if(e.target.id==elem.id){
                const listJson = localStorage.getItem('taskOne');
                const currentListJson = listJson !== null ? JSON.parse(listJson) : [];
                localStorage.setItem("taskOne",JSON.stringify([...currentListJson,elem]))
             }
             else{
                 arr.push(elem)
             }
          })
          localStorage.setItem("taskTwo",JSON.stringify([...arr]))
          console.log(arr)
          setListTwo([...arr])
          console.log(listTwo)
          const newlistJson = localStorage.getItem('taskOne');
          const currentNewListJson = newlistJson !== null ? JSON.parse(newlistJson) : [];
          setListOne(currentNewListJson)
    }
    const remove=(e:any)=>{
        const arr:any[]=[]
        if(e.target.className=="one"){
            const listJson = localStorage.getItem('taskOne');
            const currentListJson = listJson !== null ? JSON.parse(listJson) : [];
            currentListJson.forEach((elem:any)=>{       
             if(e.target.id!=elem.id){
                   arr.push(elem)
             }
          })
          localStorage.setItem("taskOne",JSON.stringify(arr))
          const newListJson = localStorage.getItem('taskOne');
          const currentNewListJson = newListJson !== null ? JSON.parse(newListJson) : [];
          setListOne(currentNewListJson)
        }
        else if(e.target.className=="two"){
            const listJson = localStorage.getItem('taskTwo');
            const currentListJson = listJson !== null ? JSON.parse(listJson) : [];
           currentListJson.forEach((elem:any)=>{       
                 if(e.target.id!=elem.id){
                       arr.push(elem)
                 }
              })
              localStorage.setItem("taskTwo",JSON.stringify(arr))
              const newListJson = localStorage.getItem('tasktwo');
              const currentNewListJson = newListJson !== null ? JSON.parse(newListJson) : [];
              setListTwo(currentNewListJson)
        }
        else{
            const listJson = localStorage.getItem('taskThree');
            const currentListJson = listJson !== null ? JSON.parse(listJson) : [];
            currentListJson.forEach((elem:any)=>{       
                 if(e.target.id!=elem.id){
                       arr.push(elem)
                 }
              })
              localStorage.setItem("taskThree",JSON.stringify(arr))
              setListThree(arr)

        }
    }
    const editTrue=(e:any)=>{
        let title=""
        let body=""
        if(e.target.className=="one"){
            listOne.forEach((elem:any)=>{
                if(elem.id==e.target.id){
                    title=elem.title
                    body=elem.body
                }
            })
        }
        else if(e.target.className=="two"){
            listTwo.forEach((elem:any)=>{
                if(elem.id==e.target.id){
                    title=elem.title
                    body=elem.body
                }
            })
        }
        else{
            listThree.forEach((elem:any)=>{
                if(elem.id==e.target.id){
                    title=elem.title
                    body=elem.body
                }
            })
        }
        setEdit({bool:true,cls:e.target.className,num:e.target.id,title:title,body:body})
        
    }
    const editFalse=()=>{
        setEdit({bool:false,cls:edit.cls,num:edit.num,title:edit.title,body:edit.body})
    }
    const handleEdit=(e:any)=>{ 
        e.preventDefault()
        const edd=[...Array.from(new FormData(e.target))]
        const arr:any[]=[]
        if(edit.cls=="one"){
            const listJson = localStorage.getItem('taskOne');
            const currentListJson = listJson !== null ? JSON.parse(listJson) : [];
            currentListJson.forEach((elem:any)=>{       
                 if(edit.num==elem.id){
                    elem.title=edd[0][1]
                    elem.body=edd[1][1]
                 }
                 arr.push(elem)
              })
              localStorage.setItem("taskOne",JSON.stringify(arr))
              setListOne(arr)
            }
            else if(edit.cls=="two"){
                const listJson = localStorage.getItem('taskTwo');
                const currentListJson = listJson !== null ? JSON.parse(listJson) : [];
                currentListJson.forEach((elem:any)=>{       
                     if(edit.num==elem.id){
                        elem.title=edd[0][1]
                        elem.body=edd[1][1]
                     }
                     arr.push(elem)
                  })
                  localStorage.setItem("taskTwo",JSON.stringify(arr))
                  setListTwo(arr)
            }
            else if(edit.cls="three"){
                const listJson = localStorage.getItem('taskThree');
                const currentListJson = listJson !== null ? JSON.parse(listJson) : [];
                currentListJson.forEach((elem:any)=>{       
                     if(edit.num==elem.id){
                        elem.title=edd[0][1]
                        elem.body=edd[1][1]
                     }
                     arr.push(elem)
                  })
                  localStorage.setItem("taskThree",JSON.stringify(arr))
                  setListThree(arr)
            }
    }
  return (
     <div className='taskMain'>
         {!edit.bool && <Add handleAdd={handleAdd} />}
         {edit.bool && <Edit edit={editFalse} get={handleEdit} title={edit.title} body={edit.body} />}
         <div className='elementMain'>
         <div className='todo' >
         <div className='name'><h1>To Do</h1></div>
             {
                listOne.map((elem:any,index:any)=>{
                    return <ToDo  title={elem.title} body={elem.body} num={index+1} key={elem.id} move={posMove} id={elem.id} del={remove} edit={editTrue} />
                })
             }
             </div>
             <div className='doing' >
             <div className='name'><h1>Doing</h1></div>
             {
                listTwo.map((elem:any,index:any)=>{
                    return <Doing  title={elem.title} body={elem.body} num={index+1} key={elem.id} id={elem.id} over={complite} down={toDo} del={remove} edit={editTrue} />
                })
             }
             </div>
             <div className='done' >
             <div className='name'><h1>Done</h1></div>
             {
                listThree.map((elem:any,index:any)=>{
                    return <Done title={elem.title} body={elem.body} num={index+1} key={elem.id} id={elem.id} del={remove} left={posMove} edit={editTrue}/>
                })
             }
             </div>
         </div>
     </div>
  )
}
