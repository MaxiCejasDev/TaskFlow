import Chat from "./Chat/Chat";


export default function ChatContainer (){
    return(
        <div className="h-full w-full bg-red-500 col-start-3 col-end-4">
            <div className="h-3/4 w-full pt-8 px-4">
                <Chat/>
            </div>
            <div></div>
        </div>
    )
}