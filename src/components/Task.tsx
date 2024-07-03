
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
   const handleOpenTaskEditor = ()=>{
    setOpenTaskEditor(!openTaskEditor)
   }
   
    return(
        <div  className="flex w-full relative bg-white-tertiary border-[1px] border-white-light items-center gap-x-4 px-2">
            <input className="h-[20px] w-[20px]" type="checkbox" />
            <p>{taskText}</p>
            <div className="flex gap-x-1 absolute right-0 top-0">
                <button onClick={()=> handleDeleteTask(taskId)}  id="button" ><img className="h-[26px] w-[26px]" src="/images/close.svg" alt="" /></button>               
                <button onClick={handleOpenTaskEditor} id="button" ><img className="h-[26px] w-[26px]" src="/images/pencil-task.svg" alt="" /></button>
            </div>
            
            {openTaskEditor && <TaskEdit openTaskEditor={openTaskEditor} handleOpenTaskEditor={handleOpenTaskEditor} taskId={taskId} handleEditTask={handleEditTask}/>}
        </div>
    )
}

