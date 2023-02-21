import React,{useEffect, useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./signin.css";
import axios from "axios"

const Signin = () => {
    const navigate=useNavigate()

    const [formdata,setformdata]=useState({
        email:"",
        password:""
      })
      const [user,setuser]=useState([])
      const [error,seterror]=useState("")

    //   const form =[{...formdata}]
      
    const handelsubmit=(e)=>{
        e.preventDefault();
        user.filter((data)=>{
            if(data.email==formdata.email) {
                if(data.password==formdata.password){
                    navigate("/movie")
                    
                }else{
                    seterror("Enter Correct Password")

                }
            }
            
               

            else{
                    seterror("User Not Register Please Sign Up")
                }
              
        })
      
   
     
   
       
        
       

    }
    useEffect(()=>{
        const getdata=async()=>{
           const res= await axios.get("https://63c01c90a177ed68abbfd528.mockapi.io/user");
        
           setuser(res.data)

        }
        getdata()
    },[])
    
   

    return (<>
    
        <div className='sign'>
           
          
<form className="login" onSubmit={(e)=>handelsubmit(e)}>
<span class="badge badge-danger">{error}</span>

  <h1 className="login__title">Sign In</h1>
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
  <button className="login__sign-in" type="submit">Sign In</button>
  <div className="login__secondary-cta"><a className="login__secondary-cta__text" href="#"></a><a className="login__secondary-cta__text login__secondary-cta__text--need-help" href="#">New User <Link to="/signup">SignUp</Link></a>
  </div>
</form>
            
        </div></>
    );
}

export default Signin;
