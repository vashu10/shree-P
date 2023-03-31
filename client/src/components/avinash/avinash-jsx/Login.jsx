import { useGoogleLogin } from '@react-oauth/google';
import {Context} from "../../../context/Context"
import { GoogleOAuthProvider } from '@react-oauth/google';
import React, { useRef,useContext } from 'react'
import "../css/Auth.css";
import { FaUserFriends } from "react-icons/fa";
import { BsEnvelope } from "react-icons/bs";
import { AiOutlineArrowRight } from "react-icons/ai";
import { AiFillLock } from "react-icons/ai";
import { useFormik } from "formik";
// import { signUpSchema } from "./Schemas/Index";
import * as Yup from "yup";
import { Link } from 'react-router-dom';


import GoogleIcon from '@mui/icons-material/Google';



import axios from 'axios';






const initialValues = {
 
  username: "",
  password: "",
 
};

const signUpSchema = Yup.object({
 
  name: Yup.string().min(2).max(25).required("Please enter your name"),
  password: Yup.string().min(6).required("Please enter your passwod"),
  
});

const Login = () => {

  const usernameRef=useRef();
  const passwordRef = useRef();
  const {user,dispatch, isFetching } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/login", {
      
        username:usernameRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      // window.location.replace("/")
      console.log(user)        
      window.location.replace("/")
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });
      console.log(err.response.data)
    }
    console.log(user)
        
  };
  console.log(user)
   

    const login = useGoogleLogin({
        onSuccess: async respose => {
            try {
                const res = await axios.get("https://www.googleapis.com/oauth2/v3/userinfo", {
                    headers: {
                        "Authorization": `Bearer ${respose.access_token}`
                    }
                })

                console.log(res.data)
            } catch (err) {
                console.log(err)

            }

        }
    });  




    const { values, errors, touched, handleBlur, handleChange } =
    useFormik({
      initialValues,
      validationSchema: signUpSchema,
      onSubmit: (values, action) => {
        console.log(
          "  file:Signup.jsx ~ line 24 ~ Signup ~ values",
          values
        );
        action.resetForm();
      },
    });
  console.log("  file:Signup.jsx ~ line 30 ~ Signup ~ errors", errors);
 
  return (
    <>


<div className="form_container">
      <div className="left"></div>
      <div className="login_container">
        <h1>Login</h1>

        <form onSubmit={handleSubmit}>
          

        

          <div className="input-block">
          <div className="name">
              <FaUserFriends
                style={{
                  display: "flex",
                  marginTop: "10px",
                  marginRight: "10px",
                }}
              />
              <input
                type="name"
                autoComplete="off"
                name="name"
                id="name"
                placeholder="FULL NAME"
                ref={usernameRef}
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
              ></input>
              <div>
              
            </div>
            </div>
            {errors.name && touched.name ? (
                <p className="form-error">{errors.name}</p>
              ) : null}
          </div>
          <div className="input-block">
            <div className="envelope">
              <AiFillLock
                style={{
                  display: "flex",
                  marginTop: "10px",
                  marginRight: "10px",
                }}
              />
              <input
                type="password"
                autoComplete="off"
                name="password"
                id="password"
                placeholder="PASSWORD"
                 ref={passwordRef}
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              ></input><br/>
              <div>
             
            </div>
            </div>
            {errors.password && touched.password ? (
                <p className="form-error">{errors.password}</p>
              ) : null}
          </div>
            
          
          <button type="submit" className="login_btn" disabled={isFetching}>
            SIGN UP{" "}
            <AiOutlineArrowRight
              style={{
                marginLeft: "20px",
                justifyContent: "right",
                alignItems: "right",
              }}
            />
          </button>
        </form>
        <p className="signin_info">
          Don't have an account? <Link to='/signup'>SignUp</Link>
        </p>
      </div>



      <div className="login-with-google">


              <p>
                Or login with 
              </p>

   

            
<button onClick={() => login()}>

<GoogleIcon style={{
    color:'#a61d46de' ,marginRight:'5px'
}} />
  Sign in with Google 
</button>



      </div>
      </div>

      
    





    </>
  )
}

export default Login