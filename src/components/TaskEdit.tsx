import { useState } from "react";

interface Props{
    openTaskEditor: boolean;
    handleOpenTaskEditor: ()=> void;
    taskId: number;
    handleEditTask : (id: number, newText: string)=> void;
}


export default function TaskEdit ({openTaskEditor, handleOpenTaskEditor,taskId,handleEditTask}: Props){
    const [inputNewValue, setInputNewValue] = useState('')
    const handleNewText = (e: React.ChangeEvent<HTMLInputElement>)=>{
        setInputNewValue(e.target.value)
    }
    
    return(
        <div role="dialog" className={openTaskEditor?"fixed bg-[rgba(0,0,0,.5)] h-screen w-full top-0 left-0 z-100 flex justify-center items-center":"hidden"}>
            <div className="bg-white h-2/6 sm:h-1/4 w-5/6 sm:w-1/4 flex justify-center items-center gap-x-2 rounded-[12px] relative">
                <button onClick={handleOpenTaskEditor} className="absolute top-[5px] right-[5px]"><img src="/images/close.svg" alt="Close icon" /></button>
                <input onChange={handleNewText} className="border-2 outline-white-light border-white-light py-2 px-2 rounded-[4px]" placeholder="Ingresar cambio" type="text" />
                <button onClick={()=>{
                    handleEditTask(taskId, inputNewValue)
                    setInputNewValue('') 
                    handleOpenTaskEditor()
                }
                    } className="bg-black-bold text-white font-semibold py-2 px-2 rounded-[12px]">Confirmar</button>
            </div>

        </div>
    )
}