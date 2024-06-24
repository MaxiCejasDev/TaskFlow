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
    tasks:TaskContent[]
}

const TaskContext = createContext<ContextType | undefined>(undefined)




export const useTaskContext = ()=>{
    return useContext(TaskContext)
}

export default function TaskProvider({children}:{children:React.ReactNode}){
    const [tasks, setTasks] = useState<TaskContent[]>([])

    const contextValue = {
        tasks
    }
    return(
       <TaskContext.Provider value={contextValue}>
        {children}
       </TaskContext.Provider>
    )
}