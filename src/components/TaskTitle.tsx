import { useState } from "react";

interface Task{
  id: number,
  text: string
}

interface TitleContent {
  id: number;
  title: string;
  tasks:Task[]
}


interface TaskTitle{
  id: number;
  titleContent: TitleContent[];

}

export default function TaskTitle({id,titleContent}: TaskTitle) {
  const [inputTitle, setInputTitle] = useState('')
  const [addTitle, setAddTitle] =  useState(false)


  const handleInputTitle = (e)=>{
    setInputTitle(e.target.value)
  }
  const handleAddTitle = (taskId:number)=>{
    titleContent.map((task)=>{
      if(task.id === taskId){
        task.title = inputTitle
        setAddTitle(true)
      }
    })
  }
  console.log(titleContent)
  return (
    
      <div className="bg-white-light border-[1px] border-blue-light h-[60px] w-full rounded-[12px] flex px-2 items-center justify-between">
        <div className="">
          <div className="h-[36px] w-[36px] bg-blue-light rounded-full flex justify-center items-center">
            <img
              className="h-[24px] w-[24px]"
              src="/images/task.svg"
              alt="Task icon"
            />
          </div>
        </div>
        <div>{
          addTitle?<p>{inputTitle}</p>:(
            <>
                        <input onChange={handleInputTitle} type="text" />
                        <button onClick={()=> handleAddTitle(id)}>Agregar</button>
            </>

          )
          }
          
        
        </div>
        <div>
          <button>
            <img
              className="h-[24px] w-[24px]"
              src="/images/pencil-title.svg"
              alt="Pencil title icon"
            />
          </button>
        </div>
      </div>
    
  );
}
