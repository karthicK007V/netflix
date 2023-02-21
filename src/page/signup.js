import React,{useState,useEffect}from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import "./signin.css";
import axios from "axios"

// import Headers from "../components/Header/header"

const Signup = () => {
    const Navigate=useNavigate()
    const handelclick=()=>{  
        const getdata=async()=>{ 
     const res= await axios.post('https://63c01c90a177ed68abbfd528.mockapi.io/user',{email:formdata.email,password:formdata.password});
    // console.log(res.data);
        }
        getdata()
 
         
       alert("Create Account SuccessFully")
       Navigate("/sign")
        
    }
    
    const [formdata,setformdata]=useState({
        name:"",
        email:"",
        password:""
      })
    //   console.log(formdata);
      useEffect(()=>{
       
      
    },[])
    return (
        <div className='sign'>
          
           
<form className="login" onSubmit={()=>{handelclick()}}>
  <h1 className="login__title">Sign Up</h1>
  <div className="login__group">
    <input className="login__group__input" type="text" required  name="name"
                   value={formdata.name}
                   onChange={(e)=>setformdata({...formdata,name:e.target.value})}/>
    <label className="login__group__label">Name</label>
  </div>
  <div className="login__group">
    <input className="login__group__input" type="text" required name="email"
                  value={formdata.email}
                  onChange={(e)=>setformdata({...formdata,email:e.target.value})}/>
    <label className="login__group__label">Email </label>
  </div>
  <div className="login__group">
    <input className="login__group__input" type="password" required  name="password"
                   value={formdata.password}
                   onChange={(e)=>setformdata({...formdata,password:e.target.value})}/>
    <label className="login__group__label">Password</label>
  </div>
  <button className="login__sign-in" type="submit" style={{"backgroundColor":"purple"}} >Sign Up</button>
  <div className="login__secondary-cta"><a className="login__secondary-cta__text" href={"#"}></a><a className="login__secondary-cta__text login__secondary-cta__text--need-help" href="#"> <Link to="/">Back</Link></a>
  </div>
</form>
            
        </div>
    );
}

export default Signup;
