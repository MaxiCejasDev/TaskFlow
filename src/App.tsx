import ChatContainer from './ChatContainer'
import NavSide  from './NavSide'
import TaskContainer from './TaskContainer'


function App() {

  return (
      <div className="h-screen w-full bg-white grid grid-cols-3 grid-rows-1 overflow-hidden">
          <NavSide/>
          <TaskContainer/>
          <ChatContainer/>
      </div> 

  )
}

export default App
