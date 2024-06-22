




export default function TaskTitle() {
  
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
        <div>
          <p>tarea</p>
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
