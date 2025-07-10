export const getAPIData = async()=>{
    try{
        const response = await fetch("http://www.omdbapi.com/?i=tt3896198&apikey=f35b4995");
        const data = await response.json();
        console.log(data);
        return data;
    }
    catch(error){
        console.log("error:", error);
    }
}