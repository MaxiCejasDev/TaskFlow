import { useEffect, useRef, useState } from "react";

interface Props {
    id: number;
    openTitleModal: boolean;
    handleOpenTitleModal: ()=> void;
    handleAddTitle: ()=> void;
    handleDeleteTitle: (value:number)=> void;
}

export default function TaskTitleModal({id,openTitleModal,handleOpenTitleModal, handleAddTitle,handleDeleteTitle}:Props) {
  const modalRef = useRef()
  useEffect(()=>{
    const handleClickOutside = (event)=>{
      if(modalRef.current && !modalRef.current.contains(event.target)){
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
    <div ref={modalRef} className="w-[150px] h-[100px] absolute top-[-20px] right-0 bg-white z-10 flex flex-col shadow-[0px_4px_10px_rgba(0,0,0,0.25)] rounded-[12px] overflow-hidden">
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
