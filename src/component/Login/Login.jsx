import { useState } from "react";
function Login  ()  {
       
  const [loginForm, setLogin] = useState({
    email: "",
    password: "",
  });
  const [errors, setError] = useState({
    emailError: "",
    passwordError: "",
  });



  let handle = (e)=>{
    if (e.target.name == "email") {

        const emailPattern = /^[a-zA-Z0-9_]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (e.target.value.length==0) {
            setLogin({...loginForm , email:e.target.value})
            setError({...errors,emailError: "Email is required"})
        }
        else if (emailPattern.test(e.target.value)) {
            
            setLogin({...loginForm , email:e.target.value})
            setError({...errors,emailError: ""})
            
        }else{
            setLogin({...loginForm , email:e.target.value})
            setError({...errors,emailError: "Invalid email"})
        }
        

    }else if (e.target.name == "password") {

        setLogin({...loginForm , password:e.target.value})
        if (e.target.value.length==0) {
            setError({...errors,passwordError: "password is required"})
        }
        else if (e.target.value.length < 8 ) {
            
            setError({...errors,passwordError: "Min Length is 8"})
            
        }else{
            setError({...errors,passwordError: ""})
        }


    }
    
}

    let handleLogin=(e)=>{
        e.preventDefault()
        if (!errors.emailError && !errors.passwordError) {
            e.target.closest('form').submit()
        }
    }


  


    return ( 
    
        <>
        <div className="mb-3 col-6 m-auto  p-5 bg-secondary">
            <form action=""  >

                <label htmlFor="" className="form-label">Email</label>
            <input
                type="text"
                className="form-control"
                name="email"
                value={loginForm.email}
                onChange={(e) => handle(e)}

                id="as"
                aria-describedby="emailHelpId"
                placeholder="abc@mail.com"
            />
             <div className="text-danger" >{errors.emailError}</div>
                
            <label htmlFor="" className="form-label">Password</label>
            <input
                type="text"
                className="form-control"
                name="password"
                id="password"
                value={loginForm.password}
                onChange={(e) => handle(e)}
                aria-describedby="emailHelpId"
                placeholder="Password"
            />
             <div className="text-danger" role="alert">{errors.passwordError}</div>

            <button className="btn btn-info col-4 my-5 text-center mx-auto"   onClick={(e)=>{handleLogin(e)}}>Login</button>
            </form>
            
            
        </div>
        
        </> 
    
    );
}

export default Login;