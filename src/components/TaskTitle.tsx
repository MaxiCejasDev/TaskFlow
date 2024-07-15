import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { useTaskContext } from "../contexts/TaskProvider";
import TaskTitleModal from "./TaskTitleModal";

interface Task{
  id: number,
  text: string
}

interface TitleContent {
  id: number;
  title: string;
  tasks:Task[]
}


interface Props{
  id: number;
  titleTasks: TitleContent[];

}

export default function TaskTitle({id,titleTasks}: Props) {
  const {setTitleTasks} = useTaskContext()
  const [inputTitle, setInputTitle] = useState('')
  const [addTitle, setAddTitle] =  useState(false)
  const [openTitleModal, setOpenTitleModal] = useState(false)
  const inputTitleRef = useRef()
  const editRef = useRef()
  const editPosition = editRef.current ? editRef.current.getBoundingClientRect() : null

  const handleInputTitle = (e)=>{
    setInputTitle(e.target.value)
  }
  const handleTitle = (taskId:number)=>{
    const updatedTitleTasks = titleTasks.map(task => {
      if (task.id === taskId) {
          return { ...task, title: inputTitle };
      }
      return task;
  })

  setTitleTasks(updatedTitleTasks)
  setAddTitle(true);
  }

 const handleOpenTitleModal = ()=>{
  setOpenTitleModal(!openTitleModal)
 }
 const handleAddTitle = ()=>{
  setAddTitle(false)
 }
 const handleDeleteTitle = (id: number)=>{
  const updateTitle = titleTasks.filter((item)=>{
    return item.id !== id
  })
  setTitleTasks(updateTitle)
}
useEffect(()=>{
  const handleOutsideInputTitle = (event)=>{
    if(inputTitleRef.current && !inputTitleRef.current.contains(event.target)){
      setAddTitle(!addTitle)
    }
  }
  if(!addTitle){
    document.addEventListener("mousedown",handleOutsideInputTitle)
  }
  return ()=>{
    document.removeEventListener("mousedown", handleOutsideInputTitle)
  }
},[addTitle])

  return (
    
      <NavLink to={`/${id}`} className={({isActive})=>(isActive?'bg-white-light relative overflow-hidden  h-[40px] w-full rounded-[4px] font-semibold text-base text-black-bold flex px-2 items-center justify-between':'hover:bg-white-light relative  h-[40px] w-full rounded-[4px] font-semibold text-base text-black-bold flex px-2 items-center justify-between')}>
        <div  className="relative flex w-full items-center gap-x-1">
          <div className="h-[36px] w-[36px] rounded-full flex justify-center items-center">
            <img
              className="h-[16px] w-[16px]"
              src="/images/task.svg"
              alt="Task icon"
            />
          </div>
        
        {
          addTitle?<p>{inputTitle}</p>:(
            <>
            <div ref={inputTitleRef} className="w-full h-full flex items-center  gap-x-1">
              <input className="outline-none pl-2 bg-white w-full h-full" onChange={handleInputTitle} type="text" />
              <button onClick={()=> handleTitle(id)}>
                <img className="h-[24px] w-[24px]" src="/images/add-rounded.svg" alt="Add rounded icon" />
              </button>
            </div>
                        
            </>

          )
          }
          
        
        </div>
        {addTitle ? ((<div>
          <button ref={editRef} onClick={handleOpenTitleModal}>
            <img
              className="h-[24px] w-[24px]"
              src="/images/point-menu.svg"
              alt="Three point menu"
            />
          </button>
        </div>)):'' }
        
        {openTitleModal && <TaskTitleModal editPosition={editPosition} id={id} openTitleModal={openTitleModal} handleOpenTitleModal={handleOpenTitleModal} handleAddTitle={handleAddTitle} handleDeleteTitle={handleDeleteTitle}/>}
      </NavLink>
    
  );
}
