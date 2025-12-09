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
import Preferences from './components/Preferences'
import Security from './components/Security'
import EditProfile from './components/EditProfile'
import Auth from './layouts/Auth'
import { AuthProvider } from './contexts/authContext'



function App() {


  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* Auth routes (login / register) */}
          <Route path="/auth" element={<Auth />} />

          {/* Main application routes (protected by Auth component/state) */}
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Navigate to="dashboard" replace />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="transactions" element={<Transactions />} />
            <Route path="accounts" element={<Accounts />} />
            <Route path="investments" element={<Investments />} />
            <Route path="credit-cards" element={<CreditCards />} />
            <Route path="loans" element={<Loans />} />
            <Route path="services" element={<Services />} />
            <Route path="privileges" element={<Privileges />} />
            <Route path="setting" element={<Setting />}>
              <Route index element={<EditProfile />} />
              <Route path="preferences" element={<Preferences />} />
              <Route path="security" element={<Security />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
