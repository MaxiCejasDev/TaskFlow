
export default function TaskEdit (){

    const openTaskEditor = false
    return(
        <div className={openTaskEditor?"fixed bg-[rgba(0,0,0,.5)] h-screen w-full top-0 left-0 z-10 flex justify-center items-center":"hidden"}>
            <div className="bg-white h-1/4 w-1/4 flex justify-center items-center gap-x-2 rounded-[12px] relative">
                <button  className="absolute top-[5px] right-[5px]"><img src="/images/close.svg" alt="Close icon" /></button>
                <input className="border-2 border-blue-light" placeholder="Ingresar cambio" type="text" />
                <button className="bg-black-bold text-white py-2 px-2 rounded-[12px]">Confirmar</button>
            </div>

        </div>
    )
}