import React from 'react';
import moment from 'moment';
import './index.css';
import { Link } from 'react-router-dom';

const Post = (props) => {
    const { _id, title, category, content, create_date } = props;
    return (
        <div className='postItem'>
            <div className='postTitle'>{title}</div>
            <div className='postCategory'>{category}</div>
            <div className='postContent'>{content.substring(0, 50)}...<Link to={'/posts/' + _id}>More</Link></div>
            <div className='postDate'>Posted {moment(create_date).fromNow()}</div>            
        </div>
    )
} 

export default Post;