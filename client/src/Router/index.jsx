import React from 'react'
import { Switch, Route } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import { history } from '../Store';
import PrivateRoute from '../Containers/PrivateRoute';
import RegisterPage from '../Containers/RegisterPage';
import LoginPage from '../Containers/LoginPage';
import PostsPage from '../Containers/PostsPage';
import ProfilePage from '../Containers/ProfilePage';
import PostPage from '../Containers/PostPage';
import NewPostPage from '../Containers/NewPostPage';
import EditPostPage from '../Containers/EditPostPage';


const NoMatch = () => <div>404</div>;

const AppRouter = () => (
  <ConnectedRouter history={history}>
    <Switch>
      <Route exact path="/" component={PostsPage} />
      <PrivateRoute path='/profile' component={ProfilePage} />
      <Route path="/register" component={RegisterPage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/posts/new" component={ NewPostPage } />
      <Route path="/posts/:id/edit" component={ EditPostPage } />
      <Route path="/posts/:id/" component={PostPage} />
      <Route path="/posts/" component={PostsPage} />
      <Route component={NoMatch} />
    </Switch>
  </ConnectedRouter>
);


export default AppRouter;
