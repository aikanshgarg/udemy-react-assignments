import React, { Component } from 'react';

import './Blog.css';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';
//import FullPost from './FullPost/FullPost';

import { Route, NavLink, Switch } from 'react-router-dom';
// relative path ==> pathname: this.props.match.url + '/new-post'

class Blog extends Component {     

    render () {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink to="/posts/" exact activeClassName="active">Posts</NavLink></li>
                            <li><NavLink to={{
                                pathname: '/new-post',
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header> 
                {/*when the path is root or exactly '/', we render JSX written inside the component*/}
                {/*<Route path="/" exact render={() => <h1>Home</h1>} />*/}
                
                {/*NESTED ROUTING USED*/}
                <Switch>  {/*matches the first found Route and stops parsing after that ===> ORDER of Routes is IMP*/}
                    <Route path="/new-post" component={NewPost} />
                    <Route path="/posts" component={Posts} />
                    {/*<Route path="/:id" exact component={FullPost} />*/} {/*// :id ===> flexible path*/}
                </Switch>
            </div>
        );
    }
}

export default Blog;