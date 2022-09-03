import React, {useState, useEffect} from "react";
import { getMovies } from "../api";
import './row.css'

const Img_host = "https://image.tmdb.org/t/p/original/"
export default function Row({title, path, isLarge}){
    
    const [movies, setMovies] = useState([]);
    const fetchMovies= async (_path)=>{
        try{
            const data = await getMovies(_path);
            setMovies(data.results);
        }catch(error){
            console.log(`${error}`);
        }
    }

    useEffect(()=>{
        fetchMovies(path);
    },[path]);

    return(
        <div className="row-container">
            <h2 className="row-header">{title}</h2>
            <div className="row-cards">
                {movies.map(movie=>{
                    return (<img className={isLarge?"movie-card-large":"movie-card"} key={movie.id} src={`${Img_host}${movie.poster_path}`} alt={movie.name}></img>)
                })}
            </div>
        </div>
    );
}