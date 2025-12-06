import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Dashboard from './layouts/Dashboard'
import Transactions from './layouts/Transactions'
import Accounts from './layouts/Accounts'
import Investments from './layouts/Investments'
import CreditCards from './layouts/CreditCards'
import Loans from './layouts/Loans'
import Services from './layouts/Services'
import Privileges from './layouts/MyPrivileges'
import Setting from './layouts/Setting'



function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainLayout />}> 
          <Route index element={<Navigate to='/dashboard' replace />} />
          <Route path='dashboard' element={<Dashboard />} />
          <Route path='transactions' element={<Transactions />} />
          <Route path='accounts' element={<Accounts />} />
          <Route path='investments' element={<Investments />} />
          <Route path='credit-cards' element={<CreditCards />} />
          <Route path='loans' element={<Loans />} />
          <Route path='services' element={<Services />} />
          <Route path='privileges' element={<Privileges />} />
          <Route path='setting' element={<Setting />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
