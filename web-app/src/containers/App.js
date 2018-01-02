import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import './App.css';

import { ProductSubLayout } from '../components/Layout/ProductSubLayout';
import { ToDoListSubLayout } from '../components/Layout/ToDoListSubLayout';

import { setName, setAge } from '../actions/useractions'
import { getToDoList } from '../actions/todolistactions'
import { HomePage } from '../components/HomePage';
 
const mapStateToProps = (state) => {
  return {
    user: state.userReducer,
    todolist: state.toDoListReducer
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setName: (name) => {
      dispatch(setName(name))
    },
    setAge: (age) => {
      dispatch(setAge(age))
    },
    getToDoList: () => {
      dispatch(getToDoList())
    }
  }
}

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" render={(routeProps) => (
              <HomePage {...this.props.user} setName={this.props.setName} setAge={this.props.setAge} />
            )} />
            <Route path="/todolist" render={(routeProps) => (
              <ToDoListSubLayout {...this.props.todolist} getToDoList={this.props.getToDoList} />
            )} />
            <Route path="/products" component={ProductSubLayout} />
            <Redirect to="/" />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App) 
