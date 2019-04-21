import React, { Component } from 'react';
import axios from 'axios';

import './FullPost.css';

class FullPost extends Component {

    state = {
        loadedPost: null
    }

    // making a request when either we don't have any previous post rendered OR 
    // we have a loadedPost && have a diff id request, than the one already rendered
    componentDidUpdate() {
        if (this.props.id) {
            if (this.state.loadedPost === null || (this.state.loadedPost && this.props.id !== this.state.loadedPost.id)) {
                axios.get(`https://jsonplaceholder.typicode.com/posts/${this.props.id}`)
                    .then(response => {
                        this.setState({loadedPost: response.data});
                        //console.log(this.state.loadedPost);
                    });
            }
        }
    }

    deletePostHandler = () => {
        axios.delete(`https://jsonplaceholder.typicode.com/posts/${this.props.id}`)
            .then(response => {
                console.log(response);
            });
    }

    render () {

        // Initial 
        let post = <p style={{textAlign: 'center'}}>Please select a Post!</p>;

        // when data has not been fetched from api(request in process)
        if (this.props.id) {
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