import { useEffect } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import SignIn from './Screens/SignIn';
import ForgotPassword from './Screens/ForgotPassword';
import ResetPassword from './Screens/ResetPassword';
import SignUp from './Screens/SignUp';
import LandingPage from './Screens/LandingPage';


const App= ()=>{
    useEffect(()=>{

    },[])
    return (
      <Router>
        <Routes>
            <Route path='/' element={<LandingPage />} />
            <Route path='/forgot-password' element={<ForgotPassword />} />
            <Route path='/reset-password' element={<ResetPassword />} />
            <Route path='/sign-up' element={<SignUp />} />
            <Route path='/sign-in' element={<SignIn />} />
        </Routes>
      </Router>
    )
}

export default App