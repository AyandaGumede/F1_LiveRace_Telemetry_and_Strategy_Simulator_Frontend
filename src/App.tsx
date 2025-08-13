import { BrowserRouter, Routes, Route } from 'react-router-dom'
import RegisterForm from './Auth/RegisterForm'
import LoginForm from './Auth/LoginForm'
import ForgotPassword from './Auth/ForgotPassword'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route path="/signup" element={<RegisterForm />} />
        <Route path="*" element={<LoginForm />} /> {/* default */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
