import React, {useReducer} from 'react';
import createDataContext from './createDataContext';

//const BlogContext = React.createContext();

const blogReducer = (state, action) =>
{
    switch(action.type)
    {
        case 'ADD_BLOG_POST':
            return [...state, {title: `Blog Post #${state.length + 1}`}];
        default:
            return state;
    }
}

const addBlogPost = (dispatch) => {
    return () => {
        dispatch({type: "ADD_BLOG_POST"});
    }
    
} 

/*export const BlogProvider = ({children})=>
{
    //const [blogPosts, setBlogPosts] = useState([]);
    const [blogPosts, dispatch] = useReducer(blogReducer,[]);

    /*const addBlogPost = () => {
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

export const  { Context, Provider} = createDataContext(blogReducer,{addBlogPost}, [] )