import { useState, createContext } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import LogIn from './Formulaires/LogInFolder/logIn.jsx';
import SignIn from './Formulaires/SignInFolder/SignIn.jsx';
import ForgetPassword from './Formulaires/ForgetPasswordFolder/ForgetPassword.jsx';
import MainMovies from './MainMovies/Main/MainMovies.jsx';
import { BrowserRouter } from 'react-router-dom';

export const context = createContext(); 

function App() {
  const [dateBirth, setDateBirth] = useState('');
  const [isFormValid, setIsFormValid] = useState(false)
  const [HaveAccount, setIsHaveAccount] = useState(true)
  const [isForgetPassword, setIsForgetPassword] = useState(false);
  const [user, setUser] = useState('');

  return (
    <>
      {!isFormValid ? (
        <context.Provider value={{
          user, setUser, 
          HaveAccount, setIsHaveAccount, 
          isFormValid, setIsFormValid, 
          setIsForgetPassword, 
          dateBirth, setDateBirth
        }}>
          {!isForgetPassword ? (
            <div className={`auth-wrapper ${HaveAccount ? "slide-in" : "slide-out"}`}>
              {HaveAccount ? <LogIn/> : <SignIn/>}
            </div>
          ) : (
            <div className='ForgetPage'><ForgetPassword /></div>
          )}
        </context.Provider>
      ) : (
          <MainMovies user={user} dateBirth={dateBirth} />
      )}
    </>
  )
}

export default App