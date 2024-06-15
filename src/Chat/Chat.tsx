


export default function Chat(){
    return(
        <div className="h-full w-full bg-white-tertiary rounded-[26px] overflow-hidden">
            <div className="pt-[20px] px-[15px]">
                <div className="bg-white-secondary h-[50px] px-3 border-[1px] flex items-center border-white-light rounded-[50px]">
                    <input className="w-full bg-transparent outline-none" placeholder="Consultar a Gemini AI" type="text" />
                    <button className="w-[35px] h-[35px] bg-white-light rounded-full flex items-center justify-center">
                        <img className="h-[28px] w-[28px] rotate-90" src="/images/arrow.svg" alt="Arrow chat" />
                    </button>
                </div>
                
            </div>
            <div className="bg-yellow-400 h-[calc(100%-50px)] pb-8 pt-2 px-3">
                <div className="bg-blue-500 h-full w-full"></div>
            </div>
        </div>
    )
}