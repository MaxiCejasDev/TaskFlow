import { useState } from "react";
import TaskTitle from "./components/TaskTitle";
import { useTaskContext } from "./contexts/TaskProvider";

export default function NavSide() {
  const [navOpen, setNavOpen] = useState(true);
  const [navMenu, setNavMenu] = useState(false)
  const { titleTasks, handleTitleTasks } = useTaskContext();
  const handleNavOpen = ()=>{
    setNavOpen(!navOpen)
  }
  const handleNavMenu = ()=>{
    setNavMenu(!navMenu)
  }
  console.log(titleTasks)

  return (
    <nav className={`bg-white-tertiary w-full h-[50px] border-b-1 border-white-light sm:h-full sm:relative  sm:border-white-light sm:border-[1px] sm:w-[300px] sm:px-0 sm:pt-4 sm:shadow-[5px_0px_10px_rgba(200,200,200,0.3)] duration-1000 ${navOpen?'':'translate-x-[calc(-300px+10px)]'}`}>
      <div className="w-full h-full sm:hidden">
          <div onClick={handleNavMenu} className="h-full w-[60px] flex flex-col justify-center items-center py-2 gap-y-1">
            <div className={`h-[4px] w-[30px] bg-black ${navMenu?'menu-bar-1':'duration-500'}`}></div>
            <div className={`h-[4px] w-[30px] bg-black relative ${navMenu?'menu-bar-2':'duration-500'}`}>
              <div className={`h-[4px] w-[30px] bg-black duration-500 absolute top-0 ${navMenu?'close-bar-1':''}`}></div>
              <div className={`h-[4px] w-[30px] bg-black duration-500 absolute top-0 ${navMenu?'close-bar-2':''}`}></div>
            </div>
            <div className={`h-[4px] w-[30px] bg-black ${navMenu?'menu-bar-3':'duration-500'}`}></div>
          </div>
      </div>
      <div className={`h-screen overflow-y-auto w-full px-4 bg-white-tertiary pt-4 translate-x-[-110%] sm:translate-x-0 duration-500 ${navMenu?'translate-x-[0] duration-500':''}`}>
        <div className="w-full flex justify-between">
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

          <div className="sm:flex sm:flex-col gap-y-1">
          {titleTasks.map(({id}: {id:number}) => (
            <TaskTitle key={id}  id={id} titleTasks={titleTasks} />
          ))}
          </div>
        

      </div>
      <div
      onClick={handleNavOpen}
        className="hidden h-[60px] cursor-pointer w-[30px] border-[1px] border-neutral-400 bg-white-secondary hover:bg-white-tertiary shadow-[0px_5px_10px_rgba(0,0,0,0.07)] 
            z-10 absolute top-[calc(50%-60px)] right-[-25px] sm:flex justify-center items-center rounded-full
            "
      >
        <button className="z-50">
          <img className={` duration-1000 z-50 ${navOpen?'':'rotate-180'}`} src="/images/arrow-close.svg" alt="Arrow icon" />
        </button>
      </div>
    </nav>
  );
}
