import React, {useReducer} from 'react';
import createDataContext from './createDataContext';

//const BlogContext = React.createContext();

const blogReducer = (state, action) =>
{
    switch(action.type)
    {
        case 'ADD_BLOG_POST':
            return [
                ...state, 
                {id:Math.floor(Math.random() * 9999), title: `Blog Post #${state.length + 1}`}
            ];
        case 'ADD_BLOG_POST_FIELDS':
            return [
                ...state, 
                {
                    id:Math.floor(Math.random() * 9999), 
                    title: action.payload.title, 
                    content: action.payload.content
                }
            ];
        case 'DELETE_BLOG_POST':
            console.log("Deleting : ")
            return state.filter((blogPost) => blogPost.id !== action.payload );
        case 'EDIT_BLOG_POST':
            return state.map((blogPost)=> {                
                if(blogPost.id === action.payload.id)
                {
                    return action.payload
                }
                else{
                    return blogPost
                }
            })
        default:
            return state;
    }
}

const addBlogPost = (dispatch) => {
    return () => {
        dispatch({type: "ADD_BLOG_POST"});
    };    
} 

const addBlogPostFields = (dispatch) => {
    return (title, content, callback) => {
        dispatch({type: "ADD_BLOG_POST_FIELDS", payload: {title: title, content: content}});
        callback();
    };    
} 

const deleteBlogPost = (dispatch) =>
{
    return id => {
        dispatch({type: 'DELETE_BLOG_POST', payload: id});
    }
}

const editBlogPost = dispatch => {
    return (id, title, content, callback) => {
        dispatch({type:'EDIT_BLOG_POST', payload:{id: id, title: title, content: content}});
        if(callback)
        {
            callback();
        }
        
    }
}


export const  { Context, Provider} = createDataContext(
    blogReducer, {addBlogPost, deleteBlogPost, addBlogPostFields, editBlogPost}, [{id: 1, title: 'Test post', content: 'content Here'}] )


/*export const BlogProvider = ({children})=>
{
    //const [blogPosts, setBlogPosts] = useState([]);
    const [blogPosts, dispatch] = useReducer(blogReducer,[]);

    /* //const addBlogPost = () => {
        setBlogPosts([...blogPosts, {title: `Blog Post #${blogPosts.length + 1}`}]);
    } * /
    const addBlogPost = () => {
        dispatch({type: "ADD_BLOG_POST"})
    }

    return <BlogContext.Provider value={{data: blogPosts, addBlogPost}}>
            {children}
            </BlogContext.Provider>
};  */

//export default BlogContext;
