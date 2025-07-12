export const getAPIData = async()=>{
    try{
        const response = await fetch("http://www.omdbapi.com/?s=titanic&apikey=f35b4995");
        const data = await response.json();
        console.log('...', data);
        return data;
    }
    catch(error){
        console.log("error:", error);
    }
}

export const getMovieDetails = async({params})=>{
    console.log("params::", params);
    try{
        const response = await fetch(`http://www.omdbapi.com/?i=${params.id}&apikey=f35b4995`)
        const data = await response.json();
        console.log(data);
        return data;
    }
    catch(error){
        console.log("error:", error);
    }
}