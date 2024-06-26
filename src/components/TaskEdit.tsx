import { useState } from "react";

interface Props{
    openTaskEditor: boolean;
    handleOpenTaskEditor: ()=> void;

    taskId: number
}


export default function TaskEdit ({openTaskEditor, handleOpenTaskEditor,taskId}: Props){
    const [inputNewValue, setInputNewValue] = useState('')
    const handleNewText = (e)=>{
        setInputNewValue(e.target.value)
    }
    
    return(
        <div className={openTaskEditor?"fixed bg-[rgba(0,0,0,.5)] h-screen w-full top-0 left-0 z-10 flex justify-center items-center":"hidden"}>
            <div className="bg-white h-1/4 w-1/4 flex justify-center items-center gap-x-2 rounded-[12px] relative">
                <button onClick={handleOpenTaskEditor} className="absolute top-[5px] right-[5px]"><img src="/images/close.svg" alt="Close icon" /></button>
                <input onChange={handleNewText} className="border-2 border-blue-light" placeholder="Ingresar cambio" type="text" />
                <button onClick={()=>{
                
                    setInputNewValue('') 
                    handleOpenTaskEditor()
                }
                    } className="bg-black-bold text-white py-2 px-2 rounded-[12px]">Confirmar</button>
            </div>

        </div>
    )
}