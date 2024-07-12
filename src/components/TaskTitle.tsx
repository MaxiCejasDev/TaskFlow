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
    
      <NavLink to={`/${id}`}  className="hover:bg-white-light relative  h-[40px] w-full rounded-[12px] font-semibold text-base text-black-bold flex px-2 items-center justify-between">
        <div  className="relative flex items-center gap-x-1">
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
            <div ref={inputTitleRef} className="absolute z-10 top-0 left-[50px] w-[250px] px-2 h-[40px] bg-white-secondary flex gap-x-2 justify-center items-center rounded-[4px] shadow-[0px_5px_10px_rgba(0,0,0,.25)] ">
              <input className="outline-white-light pl-2 bg-white outline-1 rounded-[4px] w-[200px] h-[30px]" onChange={handleInputTitle} type="text" />
              <button onClick={()=> handleTitle(id)}>
                <img className="h-[24px] w-[24px]" src="/images/add-rounded.svg" alt="Add rounded icon" />
              </button>
            </div>
                        
            </>

          )
          }
          
        
        </div>
        <div>
          <button onClick={handleOpenTitleModal}>
            <img
              className="h-[24px] w-[24px]"
              src="/images/point-menu.svg"
              alt="Three point menu"
            />
          </button>
        </div>
        {openTitleModal && <TaskTitleModal id={id} openTitleModal={openTitleModal} handleOpenTitleModal={handleOpenTitleModal} handleAddTitle={handleAddTitle} handleDeleteTitle={handleDeleteTitle}/>}
      </NavLink>
    
  );
}
