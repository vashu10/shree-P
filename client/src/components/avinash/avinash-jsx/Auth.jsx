import React,{ useState } from "react";
import { GoogleOAuthProvider, useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import "../css/Auth.css";
import { FaUserFriends } from "react-icons/fa";
import { BsEnvelope } from "react-icons/bs";
import { AiOutlineArrowRight } from "react-icons/ai";
import { AiFillLock } from "react-icons/ai";
import { useFormik } from "formik";
// import { signUpSchema } from "./Schemas/Index";
import * as Yup from "yup";
import { Link } from 'react-router-dom';
import {Context} from "../../../context/Context"

import GoogleIcon from '@mui/icons-material/Google';

const initialValues = {
  name: "",
  email: "",
  password: "",
  confirm_password: "",
};

const signUpSchema = Yup.object({
  name: Yup.string().min(2).max(25).required("Please enter your name"),
  email: Yup.string().email().required("Please enter your email"),
  password: Yup.string().min(6).required("Please enter your passwod"),
  confirm_password: Yup.string().required().oneOf([Yup.ref("password"), null], "Password must match"),
});



const Auth = () => {


  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [error, setError] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
   
    try {
      const res = await axios.post("/auth/register", {
        username,
        email,
        password,
      });
      res.data && window.location.replace("/Login");
      alert("Registration successful!! Please Login to access the content");
    } catch (err) {
      console.log(err)
      alert("Kat gya");
      console.log(err.response.data)
    }
  };

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



  const { values, errors, touched, handleBlur} =
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
        <h1>Creat Account</h1>

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
          
                
                onChange={(e) => setUsername(e.target.value)}

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
              <BsEnvelope
                style={{
                  display: "flex",
                  marginTop: "10px",
                  marginRight: "10px",
                }}
              />
              <input
                type="email"
                autoComplete="off"
                name="email"
                id="email"
                placeholder="EMAIL"
                
                
              
                onChange={(e) => setEmail(e.target.value)}
              
              ></input><br/>
              <div>
              
            </div>
            </div>
            {errors.email && touched.email ? (
                <p className="form-error">{errors.email}</p>
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
                
             
                onChange={(e) => setPassword(e.target.value)}
                
              ></input><br/>
              <div>
             
            </div>
            </div>
            {errors.password && touched.password ? (
                <p className="form-error">{errors.password}</p>
              ) : null}
          </div>
           
          <button type="submit" className="login_btn" >
            SIGN UP{" "}
            <AiOutlineArrowRight
              style={{
                marginLeft: "40px",
                justifyContent: "right",
                alignItems: "right",
              }}
            />
          </button>
        </form>
        <p className="signin_info">
          Already have an account? <Link to='/Login'>Login</Link>


        </p>


        <div className="login-with-google">


<p>
  Or Continue with 
</p>




<button onClick={() => login()}>

<GoogleIcon style={{
color:'#a61d46de' ,marginRight:'5px'
}} />
Sign in with Google 
</button>


</div>

      </div>
    </div>
    </>
  )
}

export default Auth