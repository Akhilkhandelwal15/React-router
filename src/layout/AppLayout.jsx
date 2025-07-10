import { Outlet, useNavigate, useNavigation } from "react-router-dom";
import { Footer } from "./Footer";
import { Header } from "./Header";

export const AppLayout = ()=>{

    const navigate = useNavigate();
    
    function handleClick(){
      navigate(-1);
    }

    const navigation = useNavigation();
    const isLoading = navigation.state === "loading";

    return (
      <>
        <Header />
        {isLoading && <p>Loading...</p>}
        <Outlet />
        <button onClick={handleClick}>Go Back</button>
        <Footer />
      </>  
    );
}