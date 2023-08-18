import './post.css';
import {Link} from 'react-router-dom';
import React from 'react';
import {v4} from 'uuid';

const Post = ({post}) => {
    const PF = "http://localhost:5000/images/"
    return ( 
        <>
        <div className="post" >
            {post.photo && (<img src={PF+ post.photo} alt="" className="postImg" />)}
            <div className="postInfo">
                <div className="postCats">
                    {post.categories.map((c) => (
                        <span className='postCat' key={v4()}>{c.name}</span>
                    ))}
                </div>
                <Link to={`/post/${post._id}`} className="Link" >
                     <span className="postTitle">{post.title}</span>
                </Link>
                <hr />
                <span className="postDate">{new Date(post.createdAt).toDateString()}</span>
            </div>
            <p className="postDesc">{post.desc}</p>
        </div>
        </>
     );
}
 
export default Post;