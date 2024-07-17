
import { useParams } from "react-router-dom";
import TasksBody from "../TasksBody/TasksBody";
import { useTaskContext } from "../contexts/TaskProvider";
import { useEffect,useState } from "react";
import NotTasks from "../components/NotTasks";



interface Task {
    id: number,
    text: string
}

interface TaskContent {
    id: number;
    title: string;
    tasks: Task[]

}

export default function TaskContainer (){

    const [inputValue, setInputValue] = useState('')
    const { taskId } = useParams<{taskId:string}>()
    
    const [tasks, setTasks] = useState<Task[]>([])
    const [taskTitle, setTaskTitle] = useState<string>('')
    const context = useTaskContext();
    if (!context) {
        return null;
    }
    const {titleTasks , setTitleTasks} = context
    const handleMatchTitle = (id:number | string)=>{
        titleTasks.map((item : TaskContent)=>{
            if(id === item.id){
                setTaskTitle(item.title)
            }
        })
    }

    const handleAddTask = (text: string)=>{
        setTasks([...tasks,{
            id: tasks.length + 1,
            text: text
        }])
        setInputValue('')
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
    const handleInputValue = (e:React.ChangeEvent<HTMLInputElement>)=>{
        setInputValue(e.target.value)
    }
   
    const handleUpdateTaskTitle = (id:number, tasks: Task[])=>{
        const updateTitleTask = titleTasks.map((item : TaskContent)=>{
            if(item.id === id){
                return {...item, tasks: tasks}
            }
            return item
        })
        setTitleTasks(updateTitleTask)
    }
    const handleValidateTasks = (id : number | string)=>{
        titleTasks.map((item : TaskContent)=>{
            if(item.id === parseInt(id.toString()) && item.tasks.length > 0){
                    setTasks(item.tasks)

            }
        })
    }
    

    useEffect(()=>{ 
        setTasks([])
        if (taskId !== undefined){
            handleValidateTasks(taskId.toString())
        }
        
    },[taskId])

    useEffect(()=>{
        if(taskId !== undefined){
            handleUpdateTaskTitle(parseInt(taskId.toString()),tasks)
        }
        
    },[tasks])
    
    useEffect(()=>{
        if(taskId !== undefined){
            handleMatchTitle(parseInt(taskId.toString()))
        }
  
    },[titleTasks])

    
    return(
        <>
            
            <div className="h-screen sm:w-[calc(100%-300px)] overflow-y-auto sm:pl-16 sm:pr-64 sm:pt-8 task-container">
                {titleTasks.length <= 0?<NotTasks/>:(
                    <>
                    <div className="w-full">
                    <div className="flex gap-x-4 items-center pl-2 py-2">
                        <img className="h-[24px] w-[24px]" src="/images/task.svg" alt="Task title" />
                    <p className="text-xl text-black-bold">{taskTitle}</p>
                    </div>
    
                </div>
                <div className="w-full  pl-2 pb-2">  
                    <div className="flex pt-2 gap-x-4 w-full h-full">
                        <input onChange={handleInputValue} value={inputValue} className="w-3/4 border-2 outline-white-light pl-2 border-none" placeholder="Escribir tarea..." type="text" />
                        <button onClick={()=> handleAddTask(inputValue)}  className="bg-white-light flex items-center justify-center w-[32px] h-[32px] rounded-full">
                            <img className="h-[26px] w-[26px]" src="/images/arrow.svg" alt="" />
                        </button>
                    </div>
                </div>
                <TasksBody tasks={tasks} handleDeleteTask={handleDeleteTask} handleEditTask={handleEditTask}/>
                    </>
                )}
                

            </div>
  
                     
        
        </>
   
       

    )
}