import { Route, Routes } from 'react-router-dom'
import ChatContainer from './ChatContainer'
import NavSide  from './NavSide'
import TaskContainer from './TaskContainer'
import NotTasks from './components/NotTasks'


function App() {

  return (
      <div className="h-screen w-full bg-white grid grid-cols-3 grid-rows-1 overflow-hidden">

          <NavSide/>
          <Routes>
            <Route path="/" element={<NotTasks/>}/>
            <Route path="/:taskId" element={<TaskContainer/>}/>
          </Routes>
          <ChatContainer/>
      </div> 

  )
}

export default App
