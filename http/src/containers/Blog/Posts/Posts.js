import React, { Component } from 'react';
import axios from '../../../axios';

import Post from '../../../components/Post/Post';

import './Posts.css';

import { Route } from 'react-router-dom';
import FullPost from '.././FullPost/FullPost';

import Spinner from '../../../components/Spinner/Spinner';

// :id ===> flexible path

class Posts extends Component {

	 state = {
        posts: []
    }

    // setting state inside .then() because posts are fetched asynchronously from server(typeicode). Thus, setting it outside will be undefined
    componentDidMount() {

    	console.log(this.props);

        axios.get('/posts')
            .then(response => {
            	// showing only 4 posts 
                const posts = response.data.slice(0, 4);
                // adding author field to each post
                const updatedPosts = posts.map(post => {
                    return {
                        ...post,
                        author: 'Aikansh'
                    }
                });

                this.setState({ posts: updatedPosts })
                //console.log(response);
            });
    }

    // method to render a post on clicking it
    postSelectedHandler = id => {
        //this.setState({selectedPostId: id})
        
        // navigation programmatically using the props provided by react-router-dom(stacking pages)
        this.props.history.push({pathname: '/posts/' + id});
        //OR this.props.history.push('/posts/' + id);
    } 
	
	render() {

        let posts;
        if (this.state.posts.length === 0) {
            posts = <Spinner />
        }
		
		posts = this.state.posts.map(post => {
            return (
            //	<Link to={'/' + post.id} key={post.id}>
	            	<Post  
	            		 key={post.id}
	                     title={post.title} 
	                     author={post.author}
	                     clicked={() => this.postSelectedHandler(post.id)} />
            //    </Link> 
            );
        })

		return(
			<div>
				 <section className="Posts">
	                {posts}
	                <Route path={this.props.match.url + '/:id'} exact component={FullPost} /> 
	            </section>
            </div>
		);
	}
}

export default Posts;