import {  createContext, useContext, useState,} from "react"


interface Task {
    id: number,
    text: string
}
// interface TaskTitle {
//     titleId: number,
//     title: string,
//     tasks: Task[]
// }

interface TaskContextType {
    tasks: Task[];
    handleAddTask: (taskText:string)=>void;
    handleEditTask: (taskId:number, taskTextEdit : string)=>void;
    handleDeleteTask: (taskId:number)=>void;
}

const TaskContext = createContext<TaskContextType | undefined>(undefined)

export const useTaskContext = ()=>{
    return useContext(TaskContext)
}

export const TaskProvider = ({ children }: {children: React.ReactNode})=>{
    const [tasks, setTasks] = useState<Task[]>([])
    const handleAddTask = (taskText : string)=>{
        const newTask:Task = {
            id: tasks.length + 1,
            text: taskText
        }
        setTasks([...tasks,newTask])
    }
    const handleEditTask = (taskId : number, taskTextEdit : string )=>{
        setTasks(tasks.map(task=>
            task.id === taskId? {...task,text: taskTextEdit}:task
        ))
    }

    const handleDeleteTask = (taskId:number)=>{
        const updateTask = tasks.filter((task)=>{
            return task.id !== taskId
        })
        setTasks(updateTask)
    }
    console.log(tasks)
    const contextValue: TaskContextType = {
        tasks,
        handleAddTask,
        handleEditTask,
        handleDeleteTask,
    };
    return(
        <TaskContext.Provider value={contextValue} >
            {children}
        </TaskContext.Provider>
    )
}