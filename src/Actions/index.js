import axios from 'axios';
const ROOT_URL = 'https://mypostapi.herokuapp.com';
// const ROOT_URL = 'http://localhost:8080';

export const FETCH_POSTS = 'FETCH_POSTS';
export const CREATE_POST = 'CREATE_POST';
export const FETCH_POST = 'FETCH_POST';
export const DELETE_POST = 'DELETE_POST';
export const EDIT_POST = 'EDIT_POST';

export const fetchPosts = () => {
    const request = axios.get(`${ROOT_URL}/posts`);
    return {
        type: FETCH_POSTS,
        payload: request
    }
}

export function createPost(newPost) {
    const request = axios.post(`${ROOT_URL}/posts`, newPost);
    return {
        type: CREATE_POST,
        payload: request
    }
}

export function fetchPost(postId) {
    const request = axios.get(`${ROOT_URL}/posts/${postId}`);
    return {
        type: FETCH_POST,
        payload: request
    }
}

export function deletePost(postId) {
    const request = axios.delete(`${ROOT_URL}/posts/${postId}`);
    return {
        type: DELETE_POST,
        payload: request
    }
}

export function editPost(postId, editPost) {
    console.log(editPost);
    const request = axios({
        method: 'PUT',
        url: `${ROOT_URL}/posts/${postId}`, 
        data: editPost 
    });
    return {
        type: EDIT_POST,
        payload: request
    }
}