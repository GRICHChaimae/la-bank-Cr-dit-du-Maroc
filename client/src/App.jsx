import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Header from '../src/components/Header'
import Home from '../src/pages/Home'
import DevenirClient from '../src/pages/client/DevenirClient'
import Login from './pages/client/Login'
import AdminLogin from './pages/admin/AdminLogin'
import AdminDashboard from './pages/admin/AdminDashboard'
import ClientsProvider from './contexts/ClientsContext'
import EditClient from './pages/admin/EditClient'
import ClientEspace from './pages/client/ClientEspace'
import ClietnSold from './pages/client/ClietnSold'
import ClientAuthProvider from './contexts/ClientAuthContext'
import ClientVirement from './pages/client/ClientVirement'


function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/devenirclient' element={<DevenirClient />} />
            <Route path='/client/login' element={<ClientAuthProvider> <Login /> </ClientAuthProvider>} />
            <Route path='/client/espace' element={<ClientEspace />} />
            <Route path='/client/sold' element={<ClietnSold />} />
            <Route path='/client/virement' element={<ClientVirement />} />
            <Route path='/admin/login' element={<AdminLogin />} />
            <Route path='/admin/editclient/*' element={<EditClient />} />
            <Route path='/admin/dashboard' element={ <ClientsProvider> <AdminDashboard /> </ClientsProvider> } />
        </Routes>
      </Router>
    </>
  )
}

export default App
