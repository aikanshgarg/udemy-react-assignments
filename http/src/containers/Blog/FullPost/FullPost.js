import React, { Component } from 'react';
import axios from '../../../axios';

import './FullPost.css';

class FullPost extends Component {

    state = {
        loadedPost: null
    }

    // making a request when either we don't have any previous post rendered OR 
    // we have a loadedPost && have a diff id request, than the one already rendered
    componentDidMount() {
        console.log(this.props);
        this.loadData();
    }

    // to render a specific post, when clicked from the given 4 
    componentDidUpdate() {
        console.log(this.props);
        this.loadData();
    }

    // react-router-dom gives some props: match has an object params which has an id variable, defined by us in Route tag for FullPost(Blog.js file) 
    loadData () {
        if ( this.props.match.params.id ) {
            if ( !this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id !== +this.props.match.params.id) ) {
                axios.get( '/posts/' + this.props.match.params.id )
                    .then( response => {
                        // console.log(response);
                        this.setState( { loadedPost: response.data } );
                    } );
            }
        }
    }

    deletePostHandler = () => {
        axios.delete(`/posts/${this.props.match.params.id}`)
            .then(response => {
                console.log(response);
            });
    }

    render () {

        // Initial 
        let post = <p style={{textAlign: 'center'}}>Please select a Post!</p>;

        // when data has not been fetched from api(request in process)
        if (this.props.match.params.id) {
           post = <p style={{textAlign: 'center'}}>Loading...</p>; 
        }

        // rendering a particular post
        if (this.state.loadedPost) {
            post = (
                <div className="FullPost">
                    <h1>{this.state.loadedPost.title}</h1>
                    <p>{this.state.loadedPost.body}</p>
                    <div className="Edit">
                        <button className="Delete" onClick={this.deletePostHandler}>Delete</button>
                    </div>
                </div>

            );
        }

        return post;
    }
}

export default FullPost;