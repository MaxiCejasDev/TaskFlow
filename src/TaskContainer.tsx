
import { useParams } from "react-router-dom";
import TasksBody from "./TasksBody/TasksBody";
import { useTaskContext } from "./contexts/TaskProvider";
import { useEffect,useRef,useState } from "react";



interface Task {
    id: number,
    text: string
}

interface Tasks {
    id: number,
    tasks: Task[]
}
export default function TaskContainer (){

    const [inputValue, setInputValue] = useState('')
    const { taskId } = useParams()
    const {titleTasks , setTitleTasks} = useTaskContext()
    const [tasks, setTasks] = useState<Task[]>([])
    const [taskTitle, setTaskTitle] = useState<string>('')

    const handleMatchTitle = (id)=>{
        titleTasks.map((item)=>{
            if(parseInt(id) === item.id){
                setTaskTitle(item.title)
            }
        })
    }

    const handleAddsTask = (text: string)=>{
        setTasks([...tasks,{
            id: tasks.length + 1,
            text: text
        }])
    }
    const handleDeleteTask = (id: number)=>{
        const updateTask = tasks.filter((task)=>{
            return task.id !== id
        })
        setTasks(updateTask)
    }
    const handleEditTask = (id: number, newText: string)=>{
        const updateNewText = tasks.map((task)=>{
            if(task.id === id){
            return{...task, text: newText}
            }
            return task
        })
        setTasks(updateNewText)
    }
    const handleInputValue = (e)=>{
        setInputValue(e.target.value)
    }
   
    const handleUpdateTaskTitle = (id:number, tasks: Task[])=>{
        const updateTitleTask = titleTasks.map((item)=>{
            if(item.id === id){
                return {...item, tasks: tasks}
            }
            return item
        })
        setTitleTasks(updateTitleTask)
    }
    const handleValidateTasks = (id)=>{
        titleTasks.map((item)=>{
            if(item.id === parseInt(id) && item.tasks.length > 0){
                    setTasks(item.tasks)

            }
        })
    }
    

    useEffect(()=>{ 
        setTasks([])
        handleValidateTasks(taskId)
    },[taskId])

    useEffect(()=>{
        handleUpdateTaskTitle(parseInt(taskId),tasks)
    },[tasks])
    useEffect(()=>{
        handleMatchTitle(taskId)
    },[titleTasks])
    console.log(titleTasks)
    return(
        <>
            
                <div className="w-full h-full col-start-2 col-end-3 px-4">
                <div className="w-full">
                    <div className="flex gap-x-4 bg-red-500 items-center">
                    <div className="w-[46px] h-[46px] bg-blue-light rounded-full flex items-center justify-center">
                        <img className="h-[30px] w-[30px]" src="/images/task.svg" alt="Task title" />
                    </div>
                    <p onClick={()=> handleEditTask(1,'nuevo titutlo')} className="text-xl text-black-bold">{taskTitle}</p>
                    <div>
                        <img className="h-[32px] w-[32px]" src="/images/pencil-title.svg" alt="Lapiz simple" />
                    </div>
                    </div>
    
                </div>
                <div className="w-full bg-green-500">  
                    <div className="flex pt-2 gap-x-4 w-full h-full">
                        <input onChange={handleInputValue} className="w-3/4 border-2 border-black" placeholder="Escribir tarea..." type="text" />
                        <button onClick={()=> handleAddsTask(inputValue)}  className="bg-white-light w-[32px] h-[32px] rounded-full">
                            <img className="h-[26px] w-[26px]" src="/images/arrow.svg" alt="" />
                        </button>
                    </div>
                </div>
                {/* <TasksBody/> */}
            </div>
  
                     
        
        </>
   
       

    )
}