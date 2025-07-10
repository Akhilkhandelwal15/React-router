import { useRouteError } from "react-router-dom";

export const ErrorPage = ()=>{
    const error = useRouteError();
    console.log(error);
    return (
        <>
            <h1>404 Error Page</h1>
            <p>{error.status}</p>
            <p>{error.statusText}</p>
        </>
    );
}