import React, { Component } from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import List from './Components/List';
import Form from './Components/Form';
import ShowPost from './Components/ShowPost';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path = '/' component={List} />
          <Route exact path = '/posts/new' render={(props) => <Form {...props} action='POST' />}  />
          <Route exact path = '/posts/:id' component={ShowPost} />
          <Route exact path='/posts/:id/edit' render={(props) => <Form {...props} action='PUT' />} />
        </Switch>
      </div>
    );
  }
}

export default App;
