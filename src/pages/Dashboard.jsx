import { NavLink, useLoaderData } from "react-router-dom";

export const Dashboard = ()=>{
    const apiData = useLoaderData();
    console.log("API data:", apiData);
    const movies = apiData.Search;
    return (
        <>
            <h1>Dashboard Page</h1>
           <div className="grid-box">
            {movies.map((movie)=>(
                <div key={movie.imdbID} className="grid-item">
                    <img src={movie.Poster}/>
                    <p>Title:{movie.Title}</p>
                    <p>Type:{movie.Type}</p>
                    <p>Year:{movie.Year}</p>
                    <NavLink to={`/movie/${movie.imdbID}`}>
                        <button>Watch Now</button>
                    </NavLink>
                </div>
            ))}
           </div>
        </>
        
    );
}