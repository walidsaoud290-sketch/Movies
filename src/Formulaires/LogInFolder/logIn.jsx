import './LogIn.css';

import { useContext,useState,useEffect, useRef } from 'react';
import { context } from '../../App.jsx';
import { useValidatEmail, useValidatPassword } from '../validation.js';

const LogIn = () => {

    const {isFormValid,setIsForgetPassword,setIsFormValid} = useContext(context);
    const {HaveAccount,setIsHaveAccount} = useContext(context);
    const [errors, setErrors] = useState({});
    const email = useRef();
    const password = useRef();

    const validateCheckbox = ()=>{
      const ischeked = document.getElementById('terms').checked;
      if(!ischeked){
        setErrors(prev=>({...prev,ischeked:"you must accept terms"}))
        setIsFormValid(false)
        return false;
      }
      setIsFormValid(true);
      setErrors(prev=>({...prev,ischeked:""}))
      return true;
    }


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
      let isCheked = validateCheckbox();
      if(isEmailValide.trim()==="" && isPasswordValide.trim()==="" && isCheked)
        setIsFormValid(true);
    }

  return (
    <>
    <div className="LogIn py-5">
      <div className="row ">
        
        <div className="col-md-6 col-sm-12 mb-4">
          <h2 className="mb-3">Welcome Back!</h2>
          <p className="text-white">
            Stream unlimited movies and series anytime, anywhere. Discover trending films, exclusive releases, 
            and personalized recommendations. Connect to start watching your favorites instantly.
          </p>
        </div>

        <div className="col-md-6 col-sm-12">
          <form className="p-5 shadow bg-dark">

            <div className="form-floating mb-3">
                <input ref={email} type="email" class="form-control bg-light rounded-3" id="floatingInput" placeholder="name@example.com" />
                <label htmlFor="floatingInput">Email address</label>
                {errors.email && <p className='text-danger'>{errors.email}</p>}
            </div>
            <div className="form-floating mb-3">
                <input ref={password} type="password" class="form-control bg-light rounded-3" id="floatingInput" placeholder="password" />
                <label htmlFor="floatingInput">Password</label>
                {errors.password && <p className='text-danger'>{errors.password}</p>}
            </div>

            <div className="form-check mb-3">
              <input id="terms" type="checkbox" className="form-check-input" />
              <label htmlFor="terms" className="form-check-label text-light">
                Accept terms and conditions
              </label>
              {errors.ischeked && <p className='text-danger'>{errors.ischeked}</p>}
            </div>

            <p onClick={()=>setIsForgetPassword(true)} className="text-white pa small mb-3" style={{ cursor: "pointer" }}>
              Forgot password?
            </p>
            <p id='create' onClick={()=>setIsHaveAccount(false)} className='text-white pa small mb-3'>
                Don't have an account? <span className='text-danger sp'>Sign Up</span>
            </p>
            <button onClick={validateForm} className="btn btn-outline-danger w-100">Log In</button>

          </form>
        </div>

      </div>
    </div>
    </>
    
  );
};

export default LogIn;