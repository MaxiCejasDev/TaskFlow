import { useState } from "react";
import TaskTitle from "./components/TaskTitle";
import { useTaskContext } from "./contexts/TaskProvider";

export default function NavSide() {
  const [navOpen, setNavOpen] = useState(true);
  const { titleTasks, handleTitleTasks } = useTaskContext();
const handleNavOpen = ()=>{
    setNavOpen(!navOpen)
}
  return (
    <nav className={`bg-white-tertiary h-full relative border-white-light border-[1px] w-[300px] px-2 pt-4 shadow-[5px_0px_10px_rgba(200,200,200,0.3)] duration-1000 ${navOpen?'':'translate-x-[calc(-300px+10px)]'}`}>
      <div>
        <div className="flex justify-between">
          <div>
            <p className="font-semibold text-black-bold">Mis tareas</p>
          </div>
          <div>
            <button onClick={handleTitleTasks}>
              <img
                className="w-[26px] h-[26px]"
                src="/images/add-icon.svg"
                alt="Add task section"
              />
            </button>
          </div>
        </div>
        <div>
          {titleTasks.map((item) => (
            <TaskTitle key={item.id} id={item.id} titleTasks={titleTasks} />
          ))}
        </div>
      </div>
      <div
      onClick={handleNavOpen}
        className="h-[60px] cursor-pointer w-[30px] border-[1px] border-neutral-400 bg-white-secondary hover:bg-white-tertiary shadow-[0px_5px_10px_rgba(0,0,0,0.07)] 
            z-10 absolute top-[calc(50%-60px)] right-[-25px] flex justify-center items-center rounded-full
            "
      >
        <button>
          <img className={` duration-1000 ${navOpen?'':'rotate-180'}`} src="/images/arrow-close.svg" alt="Arrow icon" />
        </button>
      </div>
    </nav>
  );
}
