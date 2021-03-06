import React, {Component} from 'react';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';
import * as apiCalls from './api';

// CSS
const TodoListComponent = {
    listStyleType: "none",
    display: "flex",
    flexDirection: "column",
    alignContent: "flex-start"
}

class TodoList extends Component {
    constructor(props){
        super(props);
        this.state = {
            todos: []
        }
        this.addTodo = this.addTodo.bind(this);
    }

    componentWillMount(){
        this.loadTodos();
    }

    async loadTodos() {
        let todos = await apiCalls.getTodos();
        this.setState({todos});
    }

    async addTodo(val){
        let newTodo = await apiCalls.addTodo(val);
        this.setState({todos: [...this.state.todos, newTodo]}) 
    }

    async deleteTodo(id) {
        await apiCalls.removeTodo(id);
        const todos = this.state.todos.filter(todo => todo._id !== id)
        this.setState({todos: todos}) 
    }

    async toggleTodo(todo) {
        let updatedTodo = await apiCalls.toggleTodo(todo);
        const todos = this.state.todos.map(task => 
            (task._id === updatedTodo._id) ?
                {...task, completed: !task.completed} : task)
        this.setState({todos: todos}) 
    }

    render() {
        const todos = this.state.todos.map((task) => (
            <TodoItem
                key={task._id}
                {...task}
                onDelete={this.deleteTodo.bind(this, task._id)}
                onToggle={this.toggleTodo.bind(this, task)}
            />
        ));
        return (
            <div style={{
                boxShadow: "2px 3px 8px rgba(0, 0, 0, .5)",
                paddingBottom: "10px"
            }}>
                <h1 style={{paddingTop: "10px"}}>Todo List</h1>
                <TodoForm addTodo={this.addTodo}/>
                <ul style={TodoListComponent}>{todos}</ul>
            </div>
        )
    }
}

export default TodoList;