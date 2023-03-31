
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
  BrowserRouter,
  
} from "react-router-dom";
// navbar
import Navigation from './components/avinash/avinash-jsx/Navigation';
import axios from 'axios';
// for Wedding section


// About us
import About_us from './components/devina/devina-jsx/About_us';

// Footer
import Footer from './components/devina/devina-jsx/Footer';
import Addcom from './components/lavisha/lavisha-jsx/another/Addcom';

import Photos from './components/user_profile/jsx/Photos';
import Main_profile from './components/user_profile/jsx/Main_profile';

import Profile_part from './components/user_profile/jsx/Profile_part';
import Auth from './components/avinash/avinash-jsx/Auth';

import Form_1 from './components/user_profile/forms/Form_1';
import HomePage from './components/Home_page/jsx/HomePage';
import { Vendors_page } from './components/vendorPage/jsx/Vendors_page';
// import {Vendors_page} from "pathwherethecomponentexists";
import Sumup from './components/Home_page/jsx/Sumup';
import Main_home_page from './components/Home_page/jsx/Main_home_page';

import Form_2 from './components/user_profile/forms/Form_2';
import Login from './components/avinash/avinash-jsx/Login';
import Form_3 from  './components/user_profile/forms/Form_3'
import Form_4 from  './components/user_profile/forms/Form_4';
import Form from './components/user_profile/pages/Form';
import { useContext } from 'react';
import { Context } from './context/Context';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Raipur from './components/vendorPage/jsx/Raipur';

import Cdata from './components/lavisha/lavisha-jsx/another/Cdata'
import Durg from './components/vendorPage/jsx/Durg';
import Bilaspur from './components/vendorPage/jsx/Bilaspur';

// axios.defaults.baseURL = "http://localhost:5000/api/"
// axios.defaults.withCredentials = true
function App() {
  const {user} = useContext(Context)
  return (
    <GoogleOAuthProvider clientId="1091938599989-sb5ugo15okjrvfr11nl5n5tihtbo7rtl.apps.googleusercontent.com">
     <Router>
      
      <Navigation />
      
      <Routes>
        <Route exact path="/" element={<Main_home_page />}></Route>
        <Route path="/about" element={<About_us/>}></Route>
        <Route path="/city" element={<Addcom />}></Route>
        <Route path="/vendors" element={<Vendors_page />}></Route>
        <Route path="/posts/search" exact component={<Main_home_page/>} />
        <Route path="/signup" element={user ? <Main_home_page/> : <Auth />}></Route>
        <Route path="/signup_as_vendor" element={user ? <Main_home_page/> : <Form />}></Route>
        <Route path="/post/:postId" element={<Profile_part/>}></Route>
        <Route path="/Login" element={<Login/>}></Route>
        <Route path="/Form_1" element={<Form_1/>}></Route>
        <Route path="/Form_2" element={<Form_2/>}></Route>
        <Route path="/Form_3" element={<Form_3/>}></Route>
        <Route path="/Form_4" element={<Form_4/>}></Route>
        <Route path="/vendors/Raipur" element={<Raipur />}></Route>
        <Route path="/vendors/Durg" element={<Durg />}></Route>
        <Route path="/vendors/Bilaspur" element={<Bilaspur />}></Route>

              </Routes>
              
     <Footer/>
     
    
    
   
      </Router>
              </GoogleOAuthProvider>

  );
}

export default App;
