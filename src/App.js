import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Login from './components/Login'
import ChatRoom from './components/ChatRoom'
import AuthProvider from './Context/AuthProvider'
import AppProvider from './Context/AppProvider'

function App() {
  return (
      <BrowserRouter>
        <AuthProvider>
          <AppProvider>
            <Routes>
              <Route path='/login' element={<Login/>} />
              <Route path='/' element={<ChatRoom/>} />
            </Routes>
          </AppProvider>
        </AuthProvider>
      </BrowserRouter>
  );
}

export default App;
