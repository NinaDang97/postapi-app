import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchPost, deletePost } from '../../Actions';

class ShowPost extends Component {
    componentDidMount() {
        this.props.fetchPost(this.props.match.params.id);
    }

    getPostDelete = () => {
        this.props.deletePost(this.props.match.params.id)
        .then(() => {
            this.props.history.push('/');
        })
        .catch((err) => console.log('ERROR HAPPENS: ', err))
    }

    render() {  
        const { post } = this.props;
        if(!post || !post._id){
            return (
                <div>
                    Loading...
                </div>
            )
        } else {
            return (
                <div className='container'>
                    <Link to='/'>Go back to posts</Link>
                    <h3>{post.title}</h3>
                    <em>Category: {post.category}</em>
                    <p>{post.content}</p>
                    <div><strong>Posted on {post.create_date.substring(0, 19).replace('T', ', ')}</strong></div>
                    <button onClick={this.getPostDelete}>Delete</button>
                    <Link to={`/posts/${post._id}/edit`}><button>Edit</button></Link>
                </div>
            )
        }
        
    }
}

const mapStateToProps = state => {
    return {
        post: state.posts.post
    }
}

ShowPost = connect(mapStateToProps, { fetchPost, deletePost })(ShowPost)

export default withRouter(ShowPost);