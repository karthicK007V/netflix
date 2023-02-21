import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Row.css';
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const base='https://image.tmdb.org/t/p/original/';
const Row = ({title,fetchurl,isLargeRow}) => {
    const [movie,setmovies]=useState([])
    const [trailerUrl,setTrailerUrl]=useState("")
    const res=async()=>{
        const response=await axios.get(`${fetchurl}`)
        // console.log(response.data);
        setmovies(response.data.results);
    
    
      }
      // console.log(movie);
      useEffect(()=>{
        res()

      },[])

      const handelclick=(movie)=>{
       console.log(movie);
        if(trailerUrl){
          setTrailerUrl('')
        }
        else
        {
          movieTrailer( `${movie.title}`, {multi: true} )
  // .then( response =>{
  //   setTrailerUrl(response[0])
    
  //   console.log( response[0] ) }).catch((err)=>{console.log(err);})
          // movieTrailer(movie?.title || "",{id: true, multi: true})
          .then((url)=>{
            // console.log(url[1]);
            const urlparams=new URLSearchParams(new URL(url[1]||url).search);
            setTrailerUrl(urlparams.get("v"))
          }).catch((error)=>console.log("error",error))

        }

      }
      const opts={
        height: "390",
        width: "100%",
        playerVars:{
          autoplay:1,
        }

      }
     
    return (
        <div className='row'>

            <h1>{title}</h1>
            <div className={`row_posters && ${isLargeRow && "row_posterLarger"}`}>
            {
                movie.map((movie)=>(
                   
                        <img 
                        onClick={()=>{handelclick(movie)}}

                        key={movie.id}
                        className='row_poster' src={`${base}${ isLargeRow? movie.poster_path:movie?.backdrop_path}`} alt={movie.name}/>
                      
                  
                ))
            }
              </div>
             
           
            
                
                {trailerUrl && <YouTube videoId={trailerUrl}  opts={opts}/>}
           
            
        </div>
    );
}

export default Row;
