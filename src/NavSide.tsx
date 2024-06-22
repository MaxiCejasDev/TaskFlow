

export default function NavSide(){
    
    return(
        <nav className="bg-white-secondary h-full w-full col-start-1 col-end-2">
            <div>
                <div>
                    <div className="flex gap-x-2">
                        <div className="bg-red-500 w-[26px] h-[26px] rounded-full flex justify-center items-center">
                            <p className="text-sm text-white text-bold">MC</p>
                        </div>
                        <p>Maximiliano Cejas</p>
                    </div>
                    <div className="flex gap-x-2">
                        <img src="/images/house.svg" alt="House" />
                        <p>Inicio</p>
                    </div>
                    <div className="flex gap-x-2">
                        <img src="/images/config.svg" alt="House" />
                        <p>Configuración</p>
                    </div>
                </div>
                <div className="flex justify-between">
                    <div>
                        <p>Mis tareas</p>
                    </div>
                    <div>
                        <button>
                            <img className="w-[26px] h-[26px]" src="/images/add-icon.svg" alt="Add task section" />
                        </button>
                    </div>
                </div>
                <div>
                    <div className="bg-white-light border-[1px] border-blue-light h-[60px] w-full rounded-[12px] flex px-2 items-center justify-between">
                        <div className="">
                            <div className="h-[36px] w-[36px] bg-blue-light rounded-full flex justify-center items-center">
                                <img className="h-[24px] w-[24px]" src="/images/task.svg" alt="Task icon" />
                            </div>
                        </div>
                        <div>
                            <p>Titulo de tarea</p>
                        </div>
                        <div>
                            <button>
                                <img className="h-[24px] w-[24px]" src="/images/pencil-title.svg" alt="Pencil title icon" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            
        </nav>
    )
}