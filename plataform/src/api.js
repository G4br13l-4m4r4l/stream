const API_key= "3d675a572da7dca71a48e3c46c9234b9";

const categories = [
    {
        name: "trending",
        title: "Em alta",
        path: `/trending/all/week?api_key=${API_key}&language=pt-BR`,
        isLarge: true 
    },

    {
        name: "originals",
        title: "Originais",
        path: `/discover/tv?api_key=${API_key}&with_networks=213`,
        isLarge: false
    },

    {
        name: "topRated",
        title: "Populares",
        path: `/movie/top_rated?api_key=${API_key}&language=pt-BR`,
        isLarge: false 
    },
    {
        name: "comedy",
        title: "Comedias",
        path: `/discover/tv?api_key=${API_key}&with_genres=35`,
        isLarge: false
    },

    {
        name: "documentaries",
        title: "Documentarios",
        path: `/discover/tv?api_key=${API_key}&with_genres=99`,
        isLarge: false 
    }
];


export const getMovies = async(path)=>{
        try{

            let url = `https://api.themoviedb.org/3${path}`;
            const response = await fetch(url);
            return await response.json();

        }catch(error){
            console.log(`${error}`);
        }
}

export default categories;