import React, { useContext, useRef, useState } from 'react'
import './SignIn.css'
import { context } from '../../App'
import { useValidatEmail,useValidatPassword } from '../validation';
import Presentation from '../Presentation/Presentation';

const SignIn = () => {

    const {setUser,user,setIsHaveAccount,setDateBirth,dateBirth,setIsFormValid} = useContext(context);
    const [errors,setErrors] = useState({});
    const email = useRef();
    const password = useRef();

    const validateForm = (e) => {
    e.preventDefault();
    let valid = true;

    let isEmailValid = useValidatEmail(email.current.value);
    if (isEmailValid.trim() !== "") {
        valid = false;
        setErrors(prev => ({ ...prev, email: isEmailValid }));
    } else {
        setErrors(prev => ({ ...prev, email: "" }));
    }

    let isPasswordValid = useValidatPassword(password.current.value);
    if (isPasswordValid.trim() !== "") {
        valid = false;
        setErrors(prev => ({ ...prev, password: isPasswordValid }));
    } else {
        setErrors(prev => ({ ...prev, password: "" }));
    }


    if (user.trim() === "") {
        valid = false;
        setErrors(prev => ({ ...prev, userName: "name required" }));
    } else {
        setErrors(prev => ({ ...prev, userName: "" }));
    }

    if (!dateBirth) {
        valid = false;
        setErrors(prev => ({ ...prev, dateBirth: "Date is required" }));
    } else {
        const selectedDate = new Date(dateBirth);
        const today = new Date();
        const minBirthDate = new Date(1900, 0, 1);
        const maxBirthDate = new Date(today.getFullYear() - 18, today.getMonth(), today.getDate()); // 18+ years

        if (selectedDate < minBirthDate) {
            valid = false;
            setErrors(prev => ({ ...prev, dateBirth: "Date is too old" }));
        } else if (selectedDate > maxBirthDate) {
            valid = false;
            setErrors(prev => ({ ...prev, dateBirth: "You must be at least 18 years old" }));
        } else {
            setErrors(prev => ({ ...prev, dateBirth: "" }));
            console.log(selectedDate)
        }
    }
    setIsFormValid(valid);

    if (valid) {
        setIsFormValid(true);
    }
};



  return (
    <div className='SignIn row'>
        <div className="col-md-6">
            <form action="" className='shadow' id='FormCreate'>
                <div className="form-floating mb-3">
                    <input onChange={e=>setUser(e.currentTarget.value)} type="text" className="form-control rounded-3 text-dark" id="floatingInput1" placeholder="userName" />
                    <label htmlFor="floatingInput1">Username</label>
                    {errors.userName && <p className='text-danger'>{errors.userName}</p>}
                </div>
                <div className="form-floating mb-3">
                    <input ref={email} type="email" class="form-control rounded-3 text-dark" id="floatingInput2" placeholder="name@example.com" />
                    <label htmlFor="floatingInput2">Email address</label>
                    {errors.email && <p className='text-danger'>{errors.email}</p>}
                </div>

                <div className="form-floating mb-3">
                    <input ref={password} type="password" className="form-control rounded-3 text-dark" id="floatingInput3" placeholder="name@example.com" />
                    <label htmlFor="floatingInput3">Password</label>
                    {errors.password && <p className='text-danger'>{errors.password}</p>}
                </div>

                <div className="mb-3">
                    <input type='date' onChange={e=>setDateBirth(e.target.value)} id='la' className="form-control rounded-3"/>
                    {errors.dateBirth && <p className='text-danger'>{errors.dateBirth}</p>}
                </div>
                <p style={{cursor:"pointer"}} onClick={()=>setIsHaveAccount(true)} className='text-white rm small mb-3 remembered'>Remembered ?</p>
                <br />
                <button onClick={validateForm} type="submit" className="btn btn-outline-danger w-100">Sign Up</button>
            </form>
        </div>

        <div className="col-md-6 txtSign">
            <Presentation />
        </div>
    </div>
  )
}

export default SignIn