import Task from "../components/Task"

interface Task{
    id: number;
    text: string;
}

interface Props{
    tasks : Task[];
    handleDeleteTask : (value: number)=> void;
    handleEditTask : (id: number, newText: string)=> void;
}



export default function TasksBody({tasks,handleDeleteTask,handleEditTask}: Props){
    
    return(
        <div className="h-full w-full gap-y-2 pt-2 px-4 sm:px-2 flex flex-col">
            {tasks.map((task)=>(
                <Task key={task.id} taskId={task.id} taskText={task.text} handleDeleteTask={handleDeleteTask} handleEditTask={handleEditTask}/>
            ))}
        </div>
    )
}