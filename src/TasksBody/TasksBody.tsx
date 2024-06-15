import Task from "../Task/Task";
import { useTaskContext } from "../contexts/TaskProvider";


export default function TasksBody(){
    const {tasks, handleDeleteTask} = useTaskContext()
    
    return(
        <div className="h-full w-full bg-yellow-400 pt-2 px-2 flex flex-col">
            {tasks.map(task=>(
                <Task key={task.id} taskId={task.id} title={task.title} handleDeleteTask={handleDeleteTask}/>
            ))}
        </div>
    )
}