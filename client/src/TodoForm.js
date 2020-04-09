import React, {Component} from 'react';

class TodoForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            inputValue: 'Insert your task'
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({
            inputValue: e.target.value
        });
    }

    handleSubmit(){
        if(this.state.inputValue)
        this.props.addTodo(this.state.inputValue);
    }

    render() {
        return (
            <div>
                <input 
                    type="text"
                    value={this.state.inputValue}
                    onChange={this.handleChange}
                    style = {{
                        padding: "6px 14px",
                        maring: "4px 0",
                        border: "2px solid #FAFAFA",
	                    color: "#333333"
                    }}
                />
                <button
                    onClick={this.handleSubmit}
                    style = {{
                        padding: "6px 14px",
                        border: "2px solid #fcfcfc",
                        backgroundColor: "#fff"
                    }}
                >
                    Add Todo
                </button>
            </div>
        );
    }
}

export default TodoForm;