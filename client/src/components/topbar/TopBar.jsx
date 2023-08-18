import { useContext } from "react";
import "./topbar.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { Context } from "../../context/Context";
const Topbar = () => {
    const {user,dispatch} = useContext(Context);
    const PF = "http://localhost:5000/images/";
    const handleLogout = () => {
        dispatch({type:"LOGOUT"});
    }
    return ( 
        
        <div className="top">
            <div className="topLeft">
                <i className="topIcon fa-brands fa-square-facebook"></i>
                <i className="topIcon fa-brands fa-square-twitter"></i>
                <i className="topIcon fa-brands fa-pinterest"></i>
                <i className="topIcon fa-brands fa-square-instagram"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem"><Link className="Link"to="/" >HOME</Link></li>
                    <li className="topListItem"><Link className="Link"to="/" >ABOUT</Link></li>
                    <li className="topListItem"><Link className="Link"to="/" >CONTACT</Link></li>
                    <li className="topListItem"><Link className="Link"to="/write" >WRITE</Link></li>
                    <li className="topListItem" onClick={handleLogout}>{user && "LOGOUT"}</li>
                </ul>
            </div>
            <div className="topRight">

              {user ?
               (<Link to="/Settings"><img className="topImg" src={PF+user.profilePic} alt="" /></Link> )
                :( <ul className="topList">
                    <li className="topListItem"><Link className='Link' to='/login'>LOGIN</Link></li>
                    <li className="topListItem"><Link className='Link'to='/register'>REGISTER</Link></li>
                </ul>)
                }
                <i className="topSearchIcon  fas fa-search"></i>
            </div>

        </div>
     );
}
 
export default Topbar;