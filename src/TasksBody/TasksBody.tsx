import Task from "../components/Task"

interface Task{
    id: number,
    text: string
}



interface Props{
    tasks: Task[];
    handleDeleteTask: ()=> void;
    handleEditTask: ()=> void;
}


export default function TasksBody({tasks, handleDeleteTask, handleEditTask} : Props){
    console.log(tasks)
    return(
        <div className="h-full w-full bg-yellow-400 pt-2 px-2 flex flex-col">
            {tasks.map((task)=>(
                <Task key={task.id} taskId={task.id} taskText={task.text} handleDeleteTask={handleDeleteTask} handleEditTask={handleEditTask}/>
            ))}
        </div>
    )
}