import * as Types from '../Actions';
const INITIAL_STATE = {
    all: [],
    post: null
};

const PostsReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case Types.FETCH_POSTS:
            return {...state, all: action.payload.data}; //reducers need to return new object
        case Types.FETCH_POST:
            return {...state, post: action.payload.data};
        default:
            return state;
    }
}
        // case Types.CREATE_POST:
            //go to index / and automatically load Types.FETCH_POSTS
        // case Types.DELETE_POST:
            //go to index / and automatically load Types.FETCH_POSTS
export default PostsReducer;