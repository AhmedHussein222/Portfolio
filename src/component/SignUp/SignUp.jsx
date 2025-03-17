import { useState } from "react";

       


function SignUp() {
  
  const [signupForm, setsignup] = useState({
    name: "",
    email: "",
    password: "",
    passwordError:""
  });
  const [errors, setError] = useState({
    nameError:"",
    emailError: "",
    passwordError: "",
    repeatPasswordError: "",
  });
  
  
  
  let handle = (e)=>{
    let password = document.getElementsByName('_password')[0]
      console.log(password.value);

    if (e.target.name == "name") {
  
      setsignup({...signupForm , name:e.target.value})
        if (e.target.value.length==0) {
            setError({...errors,nameError: "Name is required"})
        }else{
          setError({...errors,nameError: ""})

        }

    }
    else if (e.target.name == "email") {
  
      setsignup({...signupForm , email:e.target.value})
        const emailPattern = /^[a-zA-Z0-9_]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (e.target.value.length==0) {
            setError({...errors,emailError: "Email is required"})
        }
        else if (emailPattern.test(e.target.value)) {
            
            setError({...errors,emailError: ""})
            
        }else{
            setError({...errors,emailError: "Invalid email"})
        }
        
  
    }
    else if (e.target.name == "_password") {
  
        setsignup({...signupForm , password:e.target.value})
        const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@%$#*!&])[A-Za-z\d@%$#*!&]{8,}$/;
        ;
        
        if (e.target.value.length==0) {
            setError({...errors,passwordError: "password is required"})
        }
        else if (passwordPattern.test(e.target.value)) {
            
            setError({...errors,passwordError: ""})
            
        }else{
            setError({...errors,passwordError: "invalid password"})
        }
  
  
    }
    else if (e.target.name == "repeatPassword") {
      console.log(e.target.value);
      
        if (e.target.value != password.value) {
            setError({...errors,repeatPasswordError: "password is not matching"})
        }
        else{
            setError({...errors,repeatPasswordError: ""})
        }
  
  
    }
    
  }
  
    let handleSignup=(e)=>{

       if(errors.emailError || errors.nameError || errors.passwordError || errors.repeatPasswordError){
        e.preventDefault()

        }
        
      }
      


  return(
    <>
      <div className="col-md-10 m-auto col-lg-6 col-xl-5 order-2 order-lg-1">
        <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
          Sign up
        </p>

        <form className="mx-1 mx-md-4">
          <div className="d-flex flex-row align-items-center mb-4">
            <i className="fas fa-user fa-lg me-3 fa-fw"></i>
            <div className="form-outline flex-fill mb-0">
              <label className="form-label" htmlFor="form3Example1c">
                Your Name
              </label>
              <input
                type="text"
                id="form3Example1c"
                className="form-control"
                name="name"
                value={signupForm.name}
                onChange={(e) => handle(e)}
                required


              />
              <div className="text-danger">{errors.nameError}</div>
            </div>
          </div>

          <div className="d-flex flex-row align-items-center mb-4">
            <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
            <div className="form-outline flex-fill mb-0">
              <label className="form-label" htmlFor="form3Example3c">
                Your Email
              </label>
              <input
                name="email"
                value={signupForm.email}
                onChange={(e) => handle(e)}
                type="email"
                required
                id="form3Example3c"
                className="form-control"
              />
              <div className="text-danger">{errors.emailError}</div>
            </div>
          </div>

          <div className="d-flex flex-row align-items-center mb-4">
            <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
            <div className="form-outline flex-fill mb-0">
              <label className="form-label" htmlFor="form3Example4c">
                Password
              </label>
              <input
              required
                name="_password"
                value={signupForm.password}
                onChange={(e) => handle(e)}
                type="password"
                id="form3Example4c"
                className="form-control"
              />
              <div className="text-danger">{errors.passwordError}</div>

            </div>
          </div>

          <div className="d-flex flex-row align-items-center mb-4">
            <i className="fas fa-key fa-lg me-3 fa-fw"></i>
            <div className="form-outline flex-fill mb-0">
              <label className="form-label" htmlFor="form3Example4cd">
                Repeat your password
              </label>
              <input
                name="repeatPassword"
                value={signupForm.repeatPassword}
                onChange={(e) => handle(e)}
                type="password"
                required
                id="form3Example4cd"
                className="form-control"
              />
              <div className="text-danger">{errors.repeatPasswordError}</div>

            </div>
          </div>

          <div className="form-check d-flex justify-content-center mb-5">
            <input
              className="form-check-input me-2"
              type="checkbox"
              id="form2Example3c"
            />
            <label className="form-check-label" htmlFor="form2Example3c">
              I agree to all statements in{" "}
              <a href="#!">Terms of service</a>
            </label>
          </div>

          <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
            <button type="submit" id="register" className="btn btn-primary btn-lg" onClick={(e)=>{handleSignup(e)}}>
              Register
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default SignUp;
