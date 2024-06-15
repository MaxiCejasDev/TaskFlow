import { useState } from "react";
import TaskEdit from "../components/TaskEdit";

interface HandleTask {
    taskId : number | undefined;
    title : string | undefined;
    handleDeleteTask : (value : number | undefined)=> void;
}

export default function Task({taskId,title,handleDeleteTask} : HandleTask){
    const [taskEditor, setTaskEditor] = useState(false)
    const handleTaskEditor = ()=>{
        setTaskEditor(!taskEditor)
    }
    return(
        <div  className="flex w-full relative bg-white-tertiary border-[1px] border-white-light items-center gap-x-4 px-2">
            <input className="h-[20px] w-[20px]" type="checkbox" />
            <p>{title}</p>
            <div className="flex gap-x-1 absolute right-0 top-0">
                <button onClick={()=> handleDeleteTask(taskId)}><img className="h-[26px] w-[26px]" src="/images/close.svg" alt="" /></button>               
                <button onClick={handleTaskEditor}><img className="h-[26px] w-[26px]" src="/images/pencil-task.svg" alt="" /></button>
            </div>
            
            {taskEditor && <TaskEdit handleTaskEditor={handleTaskEditor} taskEditor={taskEditor}/>}
        </div>
    )
}