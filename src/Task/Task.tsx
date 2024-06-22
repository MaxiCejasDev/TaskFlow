
// import TaskEdit from "../components/TaskEdit";



export default function Task(){

   
    return(
        <div  className="flex w-full relative bg-white-tertiary border-[1px] border-white-light items-center gap-x-4 px-2">
            <input className="h-[20px] w-[20px]" type="checkbox" />
            <p></p>
            <div className="flex gap-x-1 absolute right-0 top-0">
                <button id="button" ><img className="h-[26px] w-[26px]" src="/images/close.svg" alt="" /></button>               
                <button id="button" ><img className="h-[26px] w-[26px]" src="/images/pencil-task.svg" alt="" /></button>
            </div>
            
            {/* {openTaskEditor && <TaskEdit/>} */}
        </div>
    )
}

