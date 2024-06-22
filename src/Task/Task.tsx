import { useState } from "react";
import TaskEdit from "../components/TaskEdit";
import { useTaskContext } from "../contexts/TaskProvider";

interface TaskContent{
    taskId: number,
    taskText: string
}

export default function Task({taskId, taskText} : TaskContent){
    const {handleDeleteTask, handleEditTask} = useTaskContext()
    const [openTaskEditor, setOpenTaskEditor] = useState(false)
    const handleOpenTaskEditor = ()=>{
        setOpenTaskEditor(!openTaskEditor)
    }
    return(
        <div  className="flex w-full relative bg-white-tertiary border-[1px] border-white-light items-center gap-x-4 px-2">
            <input className="h-[20px] w-[20px]" type="checkbox" />
            <p>{taskText}</p>
            <div className="flex gap-x-1 absolute right-0 top-0">
                <button id="button" onClick={()=> handleDeleteTask(taskId)}><img className="h-[26px] w-[26px]" src="/images/close.svg" alt="" /></button>               
                <button id="button" onClick={handleOpenTaskEditor}><img className="h-[26px] w-[26px]" src="/images/pencil-task.svg" alt="" /></button>
            </div>
            
            {openTaskEditor && <TaskEdit handleOpenTaskEditor={handleOpenTaskEditor} openTaskEditor={openTaskEditor} handleEditTask={handleEditTask} taskId={taskId}/>}
        </div>
    )
}

