import React, {useReducer} from 'react';
import createDataContext from './createDataContext';
import jsonServer from '../api/jsonServer';

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
        case 'GET_BLOG_POSTS':
            return action.payload;
        default:
            return state;
    }
}

const getBlogPost = dispatch =>{
    return async () =>
    {
        const response = await jsonServer.get('/blogposts');
        dispatch({type: 'GET_BLOG_POSTS', payload: response.data});
    }
}

const addBlogPost = (dispatch) => {
    return () => {
        dispatch({type: "ADD_BLOG_POST"});
    };    
} 

const addBlogPostFields = (dispatch) => {
    return  async (title, content, callback) => {
        await jsonServer.post('/blogposts', {title: title, content: content});
        if(callback)
        {
            callback();
        }
        //dispatch({type: "ADD_BLOG_POST_FIELDS", payload: {title: title, content: content}});
        //callback();
    };    
} 

const deleteBlogPost = (dispatch) =>
{
    return async(id) => {
        await jsonServer.delete(`/blogposts/${id}`);
        dispatch({type: 'DELETE_BLOG_POST', payload: id});
    }
}

const editBlogPost = dispatch => {
    return async (id, title, content, callback) => {
        await jsonServer.put(`/blogposts/${id}`, {title: title, content: content} )
        dispatch({type:'EDIT_BLOG_POST', payload:{id: id, title: title, content: content}});
        if(callback)
        {
            callback();
        }
        
    }
}


export const  { Context, Provider} = createDataContext(
    blogReducer, {
        addBlogPost, 
        deleteBlogPost, 
        addBlogPostFields, 
        editBlogPost, 
        getBlogPost}, 
    [] )


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
