import React, { useEffect, useState } from "react";
import categories, { getMovies } from "../api";
import './Banner.css';

export default function Banner(){

    const [movie, setMovie] = useState([]);
    
    const fetchRandom = async (_path)=>{
        try{
            const originalsCategory = categories.find(
                (category)=> category.name === 'originals'
            );
            const data = await getMovies(originalsCategory.path);
            const movies = data.results;
            const randomIndex = Math.floor(Math.random() *data.results.length);
            
            setMovie(movies(randomIndex));
        }catch(error){
            console.log(`${error}`);
        }
    }
    useEffect(()=>{
        fetchRandom();
    },[]);

    return(
        <div>

        </div>
    );
}