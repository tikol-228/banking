import Header from '../components/Header'
import SideBar from './SideBar'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <div className="layout">
      <SideBar />
      <div className="main">
        <Header />
        <div className="page">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default MainLayout