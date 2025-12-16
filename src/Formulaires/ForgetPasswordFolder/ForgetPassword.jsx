import React, { useContext, useEffect, useRef, useState } from 'react'
import './ForgetPassword.css'
import { useValidatEmail, useValidatPassword } from '../validation';
import { context } from '../../App';
var RandomCode =String(Math.floor(100000 + Math.random() * 900000));

const ForgetPassword = () => { 

    const {setIsForgetPassword} = useContext(context);
    const [isValideEmail,setIsValidEmail] = useState(false);
    const [iscodeValide,setIsCodeValide] = useState(false);
    const [isTheSamePassword,setIsTheSamePassword] = useState(true);
    const [generatedCode, setGeneratedCode] = useState(null);

    const generateCode = () => {
        return Math.floor(100000 + Math.random() * 900000).toString();
    };

    const email = useRef();
    const password = useRef();
    const code = useRef();
    const confirmPassword = useRef();

    const Confirm = () => {
        const currentCode = code.current.value;

        if (!currentCode) {
            document.getElementById("codeErr").innerHTML = "Code is required";
            return;
        }

        if (currentCode !== generatedCode) {
            document.getElementById("codeErr").innerHTML = "Invalid code";
            return;
        }

        document.getElementById("codeErr").innerHTML = "";
        setIsCodeValide(true);
        code.current.value="";
};


    const validationPassword = (passwordValue)=>{
        let isPasswordCorrect = useValidatPassword(passwordValue)
        if(isPasswordCorrect!==""){
            document.getElementById('passwordErr').innerHTML=isPasswordCorrect
            return false;
        }
        document.getElementById('passwordErr').innerHTML = ""
        return passwordValue;
    }

    const Reset = (e)=>{
        e.preventDefault();
        let accutalPassword = validationPassword(password.current.value);
        let confirmPasswordValue = confirmPassword.current.value;
        if(!accutalPassword){
            return ;
        }
        if(confirmPasswordValue===accutalPassword){
            setIsForgetPassword(false);
            setIsTheSamePassword(true);
        }else{
            setIsTheSamePassword(false);
        }
    }

    const Search = async (e) => {
  e.preventDefault();

  const emailValue = email.current.value;
  const emailError = useValidatEmail(emailValue);

  if (emailError !== "") {
    document.getElementById("err").innerHTML = emailError;
    return;
  }

  document.getElementById("err").innerHTML = "";

  const code = generateCode();
  setGeneratedCode(code);
  setIsValidEmail(true);
  alert("Le code est :"+code)
};

  return (
    <div className='shadow  p-4 forget row col-sm-10' >
        <div className="txt text-dark col ">
            <img style={{width:"300px"}} src="/src/assets/side_simplified_600px.png" alt="" />
            <h1 className='text-light'>Forget Password</h1>
        <p className='text-white'>Enter your email to receive a verification code.</p>
            <div className="form-floating mb-3">
                <input ref={email} type="email" class="form-control rounded-3" id="floatingInput1" placeholder="name@example.com" />
                <label htmlFor="floatingInput1">Email address</label>
            </div><br />
            <p className='text-danger' id='err'></p>
        </div>
            {isValideEmail &&
            <><div className="form-floating divCode mb-3">
                <input ref={code} type="text" minLength={6} class="form-control code rounded-3" id="floatingInput2" placeholder="XXXXXX" />
                <label htmlFor="floatingInput2" className='ms-2'>Code</label>
            </div>
                <p className='text-danger' id='codeErr'></p>
            </>
            }
         
            <br />
            {iscodeValide && isValideEmail &&
            <>
            <div className='passwords'>
            <div className="form-floating mb-3">
                <input ref={password} type="password" class="form-control rounded-3" id="floatingInput" placeholder="password" />
                <label htmlFor="floatingInput">Password</label>
                <p className='text-danger' id='passwordErr'></p>
            </div>
            <div className="form-floating mb-3">
                <input ref={confirmPassword} type="password" class="form-control rounded-3" id="floatingInput" placeholder="Confirm password" />
                <label htmlFor="floatingInput">Confirm password</label>
                {!isTheSamePassword && <p className='text-danger'>not the same password !!!</p>}
            </div>
            </div>
            </>
            }

        <br />
        {!isValideEmail && <button onClick={Search} className='btn btn-outline-danger w-100'>Search</button>}
        {isValideEmail && !iscodeValide && <button onClick={Confirm} className='btn btn-outline-danger w-100'>Confirm</button>}
        {iscodeValide && <button className='btn btn-outline-danger w-100' onClick={Reset}>Reset</button>}
            
    </div>

  )
}

export default ForgetPassword