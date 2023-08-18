import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import './register.css';
import axios from 'axios';
import { useState } from 'react';
const Register = () => {
    const [username,setUsername] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [err,setErr] = useState(false);
    const handleSubmit = async (e) =>{
        e.preventDefault();
        setErr(true);
        try{
            const res = await axios.post("/auth/register",{
                username,
                email,
                password
            });
            res.data &&  window.location.replace("/login");
        }catch(err){
            setErr(true);
        }
    };
    return ( 
        <div className="register">
            <span className="registerTitle">Register</span>
            <form className="registerForm" onSubmit={handleSubmit}>
                <label>Username</label>
                    <input onChange={e => setUsername(e.target.value)} className="registerInput" type="text" placeholder="Enter your username..." />
                <label>Email</label>
                    <input onChange={e => setEmail(e.target.value)} className="registerInput" type="text" placeholder="Enter your email..." />
                <label>Password</label>
                    <input onChange={e => setPassword(e.target.value)} className="registerInput" type="password" placeholder="Enter your password..." />
                <button className="registerButton" type='submit'>Register</button>
            </form>
            <button className="registerLoginButton"><Link className='Link' to='/login'>Login</Link></button>
            {err && <p className='err'>Something Went Wrong:(</p>}
      </div>
     );
}
 
export default Register;