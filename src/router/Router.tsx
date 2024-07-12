import { Routes, Route } from 'react-router-dom'
import AllClasses from '@/pages/AllClasses/AllClasses'
import Assignment from '@/pages/Assignment/Assignment'
import DashBoard from '@/pages/DashBoard/DashBoard'




const Router = () => {
  return (
    <Routes>
        <Route path='/' element={<DashBoard/>}/>
        <Route path='/allclass' element={<AllClasses/>} />
        <Route path='/assignment' element={<Assignment/>} />
    </Routes>
  )
}

export default Router