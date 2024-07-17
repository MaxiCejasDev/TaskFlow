import { useEffect, useRef} from "react";

interface Props {
    editPosition: DOMRect;
    id: number;
    openTitleModal: boolean;
    handleOpenTitleModal: ()=> void;
    handleAddTitle: ()=> void;
    handleDeleteTitle: (value:number)=> void;
}

export default function TaskTitleModal({editPosition,id,openTitleModal,handleOpenTitleModal, handleAddTitle,handleDeleteTitle}:Props) {
  const modalRef = useRef<HTMLDivElement>(null)
  const topPosition = editPosition.top;
  useEffect(()=>{
    const handleClickOutside = (e: MouseEvent)=>{
      if(modalRef.current && !modalRef.current.contains(e.target as Node)){
          handleOpenTitleModal()
      } 
      
    }
    if(openTitleModal){
      document.addEventListener("mousedown",handleClickOutside)
    }
    return ()=>{
      document.removeEventListener("mousedown", handleClickOutside)
    }
  },[openTitleModal])
 
  return (
    <div ref={modalRef} className={`fixed top-[${topPosition}px] left-[calc(100%-160px)] sm:left-[122px] w-[150px] h-[100px] bg-white z-[1000] flex flex-col shadow-[0px_4px_10px_rgba(0,0,0,0.25)] rounded-[12px] overflow-hidden`}>
      <li onClick={()=>{
        handleDeleteTitle(id)
        handleOpenTitleModal()
      }} className="list-none hover:bg-white-tertiary h-[50%] flex items-center font-regular text-[16px] text-[#555555]">
        <button className="flex items-center ml-4 gap-x-2">
            <img className="h-[16px] w-[16px]" src="./images/trash-icon.svg" alt="Trash icon" />
            Eliminar</button>
      </li>
      <li onClick={()=>{
        handleAddTitle()
        handleOpenTitleModal()
      }
        
        } className="list-none hover:bg-white-tertiary h-[50%] flex items-center font-regular text-[16px] text-[#555555]">
        <button className="flex items-center ml-4 gap-x-2">
            <img className="h-[16px] w-[16px]" src="./images/pencil-title.svg" alt="Pencil icon" />
            Editar
        </button>
      </li>
    </div>
  );
}
