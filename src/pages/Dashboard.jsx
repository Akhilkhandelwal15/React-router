import { useLoaderData } from "react-router-dom";

export const Dashboard = ()=>{
    const apiData = useLoaderData();
    console.log("API data:", apiData);
    return (
        <h1>Dashboard Page</h1>
    );
}