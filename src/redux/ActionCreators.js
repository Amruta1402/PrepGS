import * as ActionTypes from "./ActionTypes";
import { ALUMS } from '../shared/alums';
import {baseUrl} from '../shared/baseUrl';

export const addPost=(post)=>({
    
        type: ActionTypes.ADD_POST,
        payload:post
    
});

export const postPost=(author,title,description)=>(dispatch)=>{
    var newPost={
        author: author,
        title: title,
        description: description
    }

    return fetch(baseUrl+'posts',{
        method:'POST',
        body: JSON.stringify(newPost),
        headers:{
            'Content-Type': 'application/json'
        },
        credentials:'same-origin'
    })
    .then((response)=>{
        if(response.ok){
            return response;
        }
        else{
            var err=new Error('Error '+ response.status+ ' '+response.statusText);
            err.response=response;
            throw err;
        }
    },
    error=>{
        var err=new Error(error.message);
        throw err;
    })
    .then((response)=>response.json())
    .then(post=>dispatch(addPost(post)))
    .catch(error =>  { console.log('post Posts', error.message); alert('Your post could not be posted\nError: '+error.message); });
}

export const fetchAlums=()=>(dispatch)=>{
    dispatch(alumsLoading(true));

    return fetch(baseUrl+'alums')
            .then((response)=>{
                if(response.ok){
                    return response;
                }
                else{
                    var err=new Error('Error '+ response.status+ ' '+response.statusText);
                    err.response=response;
                    throw err;
                }
            },
            error=>{
                var err=new Error(error.message);
                throw err;
            })
            .then((response)=>response.json())
            .then(alums=>dispatch(addAlums(alums)))
            .catch(error=>{dispatch(alumsFailed(error.message))});
}

export const alumsLoading=()=>({
    type:ActionTypes.ALUMS_LOADING
});

export const alumsFailed=(errmess)=>({
    type: ActionTypes.ALUMS_FAILED,
    payload: errmess
});

export const addAlums=(alums)=>({
    type:ActionTypes.ADD_ALUMS,
    payload:alums
});

export const fetchPosts=()=>(dispatch)=>{
    dispatch(postsLoading(true));

    return fetch(baseUrl+'posts')
    .then((response)=>{
        if(response.ok){
            return response;
        }
        else{
            var err=new Error('Error '+ response.status+ ' '+response.statusText);
            err.response=response;
            throw err;
        }
    },
    error=>{
        var err=new Error(error.message);
        throw err;
    })
    .then((response)=>response.json())
    .then(posts=>dispatch(addPosts(posts)))
    .catch(error=>{dispatch(postsFailed(error.message))});
}
export const postsLoading=()=>({
    type:ActionTypes.POSTS_LOADING
});
export const postsFailed=(errmess)=>({
    type: ActionTypes.POSTS_FAILED,
    payload: errmess
});

export const addPosts=(posts)=>({
    type:ActionTypes.ADD_POSTS,
    payload:posts
});