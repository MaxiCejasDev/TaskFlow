import { createContext, useContext, useReducer, useState } from "react"


interface Task {
    id: number,
    title: string
}
interface TaskContextType {
    tasks: Task[];
    handleAddTask: ()=> void;
    setInputValue: (value:string) => void;
    setInputEditValue : (value:string) => void;
    handleDeleteTask : (taskId : number)=> void;
}
const TaskContext = createContext<TaskContextType | undefined>(undefined)

export const useTaskContext = ()=>{
    return useContext(TaskContext)
}
const reducer = (state: Task[],action)=>{
    switch(action.type){
        case 'ADD_TASK':{
            return [...state,{id:action.id , title:action.payload}]
        }
        case 'DELETE_TASK':{
            return state.filter(task=> task.id !== action.id)
        }
    }
}


export const TaskProvider = ({ children })=>{
    const initialState:Task[] = []
    const [tasks, dispatch] = useReducer(reducer,initialState)
    const [inputValue, setInputValue] = useState('')
    const [inputEditValue, setInputEditValue] = useState('')
    const handleAddTask = ()=>{
        dispatch({
            type: 'ADD_TASK',
            id: tasks.length + 1,
            payload: inputValue
        })
        setInputValue('')
    }
    const handleDeleteTask = (taskId : number)=>{
        dispatch({
            type: 'DELETE_TASK',
            id: taskId
        })
    }
    console.log(inputValue)
    console.log(tasks)
    return(
        <TaskContext.Provider value={{tasks,handleAddTask, setInputValue, setInputEditValue,handleDeleteTask }}>
            {children}
        </TaskContext.Provider>
    )
}