
import TaskTitle from "./components/TaskTitle"
import { useTaskContext } from "./contexts/TaskProvider";


export default function NavSide(){

 
    const {titleTasks, handleTitleTasks } = useTaskContext()


    return(
        <nav className="bg-white-tertiary h-full border-white-light border-[1px] w-full col-start-1 col-end-2 px-2 pt-4 shadow-[5px_0px_10px_rgba(200,200,200,0.3)]">
            <div>

                <div className="flex justify-between">
                    <div>
                        <p className="font-semibold text-black-bold">Mis tareas</p>
                    </div>
                    <div>
                        <button onClick={handleTitleTasks}>
                            <img className="w-[26px] h-[26px]" src="/images/add-icon.svg" alt="Add task section" />
                        </button>
                    </div>
                </div>
                <div>
                    {titleTasks.map((item)=>(
                        <TaskTitle key={item.id} id={item.id} titleTasks={titleTasks} />
                    ))}
                    
                </div>
            </div>
            
        </nav>
    )
}