import { Route, Routes } from 'react-router-dom'
import NavSide  from './NavSide'
import TaskContainer from './TaskContainer'
import NotTasks from './components/NotTasks'


function App() {

  return (
      <div className="h-screen w-full bg-white  flex overflow-hidden">

          <NavSide/>
          <Routes>
            <Route path="/" element={<NotTasks/>}/>
            <Route path="/:taskId" element={<TaskContainer/>}/>
          </Routes>
          
      </div> 

  )
}

export default App
