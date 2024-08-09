export default function Login(){
    return(
        <div className="h-full w-full z-[100] bg-[#FFFFFF] fixed top-0 left-0">
            <div className="flex flex-col justify-center items-center pt-16 gap-y-[10px]">
                <h1 className="font-semibold text-3xl text-black-bold">Comience a usar TaskFlow</h1>
                <p className="font-regular text-xs text-black-bold">Organiza cada actividad de su dia de forma efectiva</p>
            </div>
            <form className="pt-16 flex flex-col items-center gap-y-10" action="">
                <div className="flex flex-col gap-y-[10px]">
                    <label className="font-semibold text-sm text-black-normal outline-black-bold" htmlFor="email">Correo electronico</label>
                    <input className="h-[50px] w-[440px] rounded-[8px] border-[1px] border-[#D9D9D9] font-regular text-base pl-2" type="text" name="email" id="email" placeholder="Correo electrónico"/>
                </div>
                <div className="flex flex-col gap-y-[10px]">
                    <label className="font-semibold text-sm text-black-normal outline-black-bold" htmlFor="password">Contraseña</label>
                    <input className="h-[50px] w-[440px] rounded-[8px] border-[1px] border-[#D9D9D9] font-regular text-base pl-2" type="text" name="password" id="password" placeholder="Contraseña"/>
                </div>
               <input className="h-[50px] w-[440px] text-white font-bold text-base bg-[#1E1E20] hover:bg-[#252527] cursor-pointer rounded-[8px]" type="button" value="Ingresar" />
            </form>
            <div className=" h-full flex flex-col items-center mt-12">
                <div className="relative w-[440px]">
                    <p className="text-sm absolute top-[-11px] bg-white left-[calc(50%-99.36px/2-4px)] mx-auto font-regular text-black-bold px-2">O continuar con</p>
                    <hr className="border-[1px] border-black w-full"/>
                </div>
                <button className="pt-6">
                    <img className="w-[30px] h-[30px]" src="/images/google.svg" alt="Google icon" />
                </button>
            </div>
        </div>
    )
}