
import TaskEdit from "../components/TaskEdit";

import { useState } from "react"




interface Props {
    taskId: number;
    taskText: string;
    handleDeleteTask: (value: number)=> void;
    handleEditTask: (id: number, newText: string)=> void;
}


export default function Task({taskId,taskText,handleDeleteTask, handleEditTask}:Props){
   const [openTaskEditor , setOpenTaskEditor ] = useState(false)
   const [isCompleted, setIsCompleted] = useState(false)
   const handleOpenTaskEditor = ()=>{
    setOpenTaskEditor(!openTaskEditor)
   }
   const handleCompletedTask = ()=>{
    setIsCompleted(!isCompleted)
   }
    return(
        <div  className="flex w-full h-[40px] rounded-[4px] justify-between sm:relative bg-white hover:bg-white-tertiary items-center gap-x-4 px-2 sm:pt-0 sm:px-2">
            <div className="flex items-center gap-x-2 justify-center h-full">
            <input onClick={()=> {
                handleCompletedTask()
            }} className="h-[20px] w-[20px]" type="checkbox" />
            <p className={`${isCompleted?'text-[#555555] line-through':''}`}>{taskText}</p>
            </div>
           
            <div className="flex gap-x-1">
                <button onClick={()=> handleDeleteTask(taskId)}  id="button" aria-label="delete"><img className="h-[26px] w-[26px]" src="/images/close.svg" alt="" /></button>               
                <button onClick={handleOpenTaskEditor} id="button" aria-label="edit"><img className="h-[26px] w-[26px] editor-button" src="/images/pencil-task.svg" alt="" /></button>
            </div>
            
            {openTaskEditor && <TaskEdit openTaskEditor={openTaskEditor} handleOpenTaskEditor={handleOpenTaskEditor} taskId={taskId} handleEditTask={handleEditTask}/>}
        </div>
    )
}

