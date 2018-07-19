import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../../Actions';
import Post from '../Post';
import './index.css';
import { Link, withRouter } from 'react-router-dom';

class List extends Component {
    componentDidMount() {
        this.props.fetchPosts();
    }

    fetchDetails = (allPosts, resTime) => {
        return (
            <div>
                {allPosts.length} results. Fetch in { resTime.toFixed(2) } seconds.
            </div>
        )
    }

    render(){
        const t1 = performance.now();
        const {allPosts} = this.props;
        const renderList = allPosts
        ? allPosts.map(post => <Post key={post._id} {...post} />)
        : null;
        const t2 = performance.now();
        const resTime = t2 - t1;
        return (
            <div className='container'>
                <Link to='/posts/new'>
                    <button>Create New Post</button>
                </Link>
                <h4>List of Posts</h4>
                {/* Info: total result, response time */}
                {allPosts 
                    ? this.fetchDetails(allPosts, resTime) 
                    : this.fetchDetails([], resTime)}
                <div className='postList'>
                    {renderList}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        allPosts: state.posts.all,
    }
}

List = connect(mapStateToProps, { fetchPosts })(List)

export default withRouter(List);

