import React,{useEffect,useState} from 'react';
import request from "../request";
import axios from "axios";
import "./Banner.css"



const Banner = () => {
    const [movie,setmovie]=useState([])
    useEffect(()=>{
        async function getdata(){
            const res=await axios.get(request.original);
            {}
            // console.log(res.data.results);
            setmovie(res.data.results[Math.floor(Math.random()*res.data.results.length-1)])
        } 
        getdata()
    },[])
    function truncate(str,n){
        return str?.length>n ?str.substr(0,n-1)+ "...":str;
    }
    return (
      
            <header
             className="banner"
             style={{
                backgroundSize:"cover",
                backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
                backgroundPosition: 'center-center'}}>
               


                <div className="banner__content">
               
                    <h1 className="banner__title">{movie?.title||movie?.name ||movie?.original_name}</h1> 

                 
                 <div className="banner__buttons">
                    <button className="banner__button">Play</button>
                    <button className="banner__button">MyList</button>

                </div> 

 
                 
                    <h1 className="banner__des">{truncate(movie.overview,150)}</h1>
              
                </div>
                
            </header>
           
        
    );
}

export default Banner;
