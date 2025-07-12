import { useLoaderData, useParams } from "react-router-dom";

export const UserDetail = ()=>{
    // const params = useParams();
    const movie = useLoaderData();
    return (
        <div>
            <h1>Movie details are:</h1>
            <div className="grid-item">
                <img src={movie.Poster}/>
                <p>Title:{movie.Title}</p>
                <p>Type:{movie.Type}</p>
                <p>Year:{movie.Year}</p>
            </div>
        </div>
    );
}