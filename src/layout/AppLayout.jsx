import { Outlet, useNavigate } from "react-router-dom";
import { Footer } from "./Footer";
import { Header } from "./Header";

export const AppLayout = ()=>{

    const navigate = useNavigate();
    
    function handleClick(){
      navigate(-1);
    }

    return (
      <>
        <Header />
        <Outlet />
        <button onClick={handleClick}>Go Back</button>
        <Footer />
      </>  
    );
}