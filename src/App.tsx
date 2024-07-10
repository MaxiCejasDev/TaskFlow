import { Route, Routes } from 'react-router-dom'
import NavSide  from './NavSide'
import { lazy, Suspense } from 'react'
import Loader from './components/Loader'

const TaskContainer = lazy(()=> import('./TaskContainer'))
const NotTasks = lazy(()=> import('./components/NotTasks'))
function App() {

  return (
      <div className="h-screen w-full bg-white  flex overflow-hidden">

          <NavSide/>
          <Suspense fallback={<Loader/>}>
          <Routes>
            
            <Route path="/" element={<NotTasks/>}/>
            <Route path="/:taskId" element={<TaskContainer/>}/>
            

          </Routes>
          </Suspense>
      </div> 

  )
}

export default App
