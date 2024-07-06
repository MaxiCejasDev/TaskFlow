import { useState } from "react";
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


interface TaskTitle{
  id: number;
  titleTasks: TitleContent[];

}

export default function TaskTitle({id,titleTasks}: TaskTitle) {
  const {setTitleTasks} = useTaskContext()
  const [inputTitle, setInputTitle] = useState('')
  const [addTitle, setAddTitle] =  useState(false)
  const [openTitleModal, setOpenTitleModal] = useState(false)

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
  return (
    
      <NavLink to={`/${id}`} className="bg-white-light relative border-[1px] border-blue-light h-[60px] w-full rounded-[12px] flex px-2 items-center justify-between">
        <div className="">
          <div className="h-[36px] w-[36px] bg-blue-light rounded-full flex justify-center items-center">
            <img
              className="h-[24px] w-[24px]"
              src="/images/task.svg"
              alt="Task icon"
            />
          </div>
        </div>
        <div>{
          addTitle?<p>{inputTitle}</p>:(
            <>
                        <input onChange={handleInputTitle} type="text" />
                        <button onClick={()=> handleTitle(id)}>Agregar</button>
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
        {openTitleModal && <TaskTitleModal id={id} handleOpenTitleModal={handleOpenTitleModal} handleAddTitle={handleAddTitle} handleDeleteTitle={handleDeleteTitle}/>}
      </NavLink>
    
  );
}
