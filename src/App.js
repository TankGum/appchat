import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Login from './components/Login'
import ChatRoom from './components/ChatRoom'
import AuthProvider from './components/Context/AuthProvider'

function App() {
  return (
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path='/login' element={<Login/>} />
            <Route path='/' element={<ChatRoom/>} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
  );
}

export default App;
