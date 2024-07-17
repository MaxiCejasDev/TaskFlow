import React, { createContext, useContext, useState } from "react"

interface Task{
    id: number;
    text: string
}

interface TaskContent {
    id: number;
    title: string;
    tasks: Task[]

}


interface ContextType{
    titleTasks : TaskContent[];
    handleTitleTasks : ()=> void;
   setTitleTasks : React.Dispatch<React.SetStateAction<TaskContent[]>>
}

const TaskContext = createContext<ContextType | undefined>(undefined)




export const useTaskContext = ()=>{
    return useContext(TaskContext)
}

export default function TaskProvider({children}:{children:React.ReactNode}){
    const [titleTasks, setTitleTasks] = useState<TaskContent[]>([])
    const handleTitleTasks = ()=>{
        
        setTitleTasks([...titleTasks,{
            id: titleTasks.length + 1,
            title: '',
            tasks: []
        }])
        
    }
   
   
    const contextValue = {
        titleTasks,
        handleTitleTasks,
        setTitleTasks,
       
    }
    return(
       <TaskContext.Provider value={contextValue}>
        {children}
       </TaskContext.Provider>
    )
}