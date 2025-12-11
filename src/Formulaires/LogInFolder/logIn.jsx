import './LogIn.css';

import { useContext,useState,useEffect, useRef } from 'react';
import { context } from '../../App.jsx';
import { useValidatEmail, useValidatPassword } from '../validation.js';
import Presentation from '../Presentation/Presentation.jsx';
const LogIn = () => {

    const {isFormValid,setIsForgetPassword,setIsFormValid} = useContext(context);
    const {setIsHaveAccount} = useContext(context);
    const [errors, setErrors] = useState({});
    const email = useRef();
    const password = useRef();


     const validateForm = (e)=>{
      e.preventDefault();
      let isEmailValide = useValidatEmail(email.current.value);
      if(isEmailValide.trim()!=="")
        setErrors(prev=>({...prev,email:isEmailValide}))
      else
        setErrors(prev=>({...prev,email:""}))
      let isValidePassword = useValidatPassword(password.current.value);
      if(isValidePassword.trim()!=="")
        setErrors(prev=>({...prev,password:isValidePassword}))
      else
        setErrors(prev=>({...prev,password:""}))
      if(isEmailValide.trim()==="" && isValidePassword.trim()==="")
        setIsFormValid(true);
    }

  return (
    <>
    <div className="LogIn py-5">
      <div className="row ">
        <div className="col-md-6 col-sm-12 mb-4">
          <Presentation />
        </div>

        <div className="col-md-6 col-sm-12">
          <form className="p-5 shadow" id='FL'>

            <div className="form-floating mb-3">
                <input ref={email} type="email" className={`form-control bg-light rounded-3`} id="floatingInput1" placeholder="name@example.com" />
                <label htmlFor="floatingInput1">Email address</label>
                {errors.email && <p className='text-danger'>{errors.email}</p>}
            </div>
            <div className="form-floating mb-3">
                <input ref={password} type="password" className={`form-control bg-light rounded-3 `} id="floatingInput2" placeholder="password" />
                <label htmlFor="floatingInput2">Password</label>
                {errors.password && <p className='text-danger'>{errors.password}</p>}
            </div>

            <button onClick={validateForm} className="btn btn-outline-danger w-100 mb-3">Log In</button><br />
            <div className='d-flex justify-content-between'>
              <p id='create' onClick={()=>setIsHaveAccount(false)} className='text-white pa small mb-3'>
                Don't have an account? <span className='text-danger sp'>Sign Up</span>
            </p>
            <p onClick={()=>setIsForgetPassword(true)} className="text-white FP small mb-3" style={{ cursor: "pointer" }}>
              Forgot password ?
            </p>
            </div>
            
          </form>
        </div>

      </div>
    </div>
    </>
    
  );
};

export default LogIn;