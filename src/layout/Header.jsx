import { NavLink } from "react-router-dom";

export const Header = ()=>{
    const getNavLinkStyle = ({isActive}) => {
        return {
            color: isActive ?  "orange" : "black",
        }
    }
    return (
        <>
            <h1>Header</h1>
            <div>
                <ul>
                    {/* When we navigate to some route then react router by default adds a active class on current route */}
                    {/* but we can also add a custom class based on isActive prerty of react-router */}
                    {/* or we can also add inline style conditionally using isActive property */}
                    {/* or we can call a function instead to make our code more structured */}

                    <li><NavLink to="/">Home</NavLink></li>

                    <li><NavLink to="/about" className={({isActive})=> isActive ? 'nav-link active-link' : 'nav-link'}>About</NavLink></li>

                    <li><NavLink to="/contact" style={({isActive})=>{
                        return {
                            color: isActive ?  "yellow" : "black",
                        }
                    }}>Contact</NavLink></li>

                    <li><NavLink to="/dashboard" style={getNavLinkStyle}>Dashboard</NavLink></li>
                </ul>
            </div>
        </>
    );
}