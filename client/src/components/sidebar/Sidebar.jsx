import { useContext, useEffect, useState } from "react";
import "./sidebar.css";
import {v4} from 'uuid';
import axios from "axios";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { Context } from "../../context/Context";
const Sidebar = () => {
    

    const [cats,setCats] = useState([]);
    useEffect(()=>{
        const getCats = async ()=>{
            const res = await axios.get("/categories");
            
            setCats(res.data,res._id);
        }
        getCats();
    },[]);

    return ( 
        <>
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <img  src="https://images.pexels.com/photos/15169364/pexels-photo-15169364/free-photo-of-woman-on-black-background.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident ducimus iure necessitatibus? Sit voluptatum incidunt, autem eveniet maiores adipisci sint, minima, quaerat nisi ducim</p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">Categories</span>
                <ul className="sidebarList">
                    {cats.map( (c) => (
                        <Link to = {`/?cat=${c.name}`} className='Link'>
                            <li className="sidebarListItem" key={v4()}>{c.name}</li>
                        </Link>
                    ))}
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">FOLLOW US</span>
                <div className="sidebarSocial">
                <i className="sidebarIcon fa-brands fa-square-facebook"></i>
                <i className="sidebarIcon fa-brands fa-square-twitter"></i>
                <i className="sidebarIcon fa-brands fa-pinterest"></i>
                <i className="sidebarIcon fa-brands fa-square-instagram"></i>
                </div>
            </div>
        </div>
        </>
     );
}
 
export default Sidebar;