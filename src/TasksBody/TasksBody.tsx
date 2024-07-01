import Task from "../components/Task"

interface Task{
    id: number,
    text: string
}





export default function TasksBody(){
    
    return(
        <div className="h-full w-full bg-yellow-400 pt-2 px-2 flex flex-col">
            {tasks.map((task)=>(
                <Task key={task.id} taskId={task.id} taskText={task.text}/>
            ))}
        </div>
    )
}