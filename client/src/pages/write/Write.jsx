import { useContext, useState } from 'react';
import './write.css';
import axios from 'axios';
import { Context } from '../../context/Context';
const Write = () => {
    const [title,setTitle] = useState("");
    const [desc,setDesc] =useState("");
    const [file,setFile]= useState(null);
    const {user} =useContext(Context);
    const handleSubmit = async(e) => {
        e.preventDefault();
        const newPost = {
            username: user.username,
            title,
            desc,
        };
        if(file){
            const data = new FormData();
            const filename = Date.now() + file.name;
            data.append("name",filename);
            data.append("file",file);
            newPost.photo = filename;
            try{
                await axios.post("/upload",data);
            }catch(err){

            }
        }
        try{
           const res = await axios.post("/posts",newPost);
           window.location.replace("/post/"+res.data._id);
        }
       catch(err){

       }
    }
    return ( 
        <div className="write">
           {file &&  <img src={URL.createObjectURL(file)} alt="" className="writeImg" />}
            <form action="" className="writeForm" onSubmit={handleSubmit}>
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                        <i className='fas fa-plus'></i>
                    </label>
                    <input style={{display:'none'}}type="file" id="fileInput" onChange={(e)=>setFile(e.target.files[0])}/>
                    <input type="text" placeholder='Title' className='writeInput' autoFocus={true} onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div className="writeFormGroup">
                    <textarea placeholder='Tell your Story...' type='text' className='writeInput writeText' onChange={(e) => setDesc(e.target.value)}></textarea>
                    <button className='writeSubmit' type='submit'>Publish</button>
                </div>
            </form>
        </div>
     );
}
 
export default Write;