import React from 'react';

const TodoItem = ({name, completed, onDelete, onToggle}) => (
    <li>
        <span
            style={{
                textDecoration: completed ? 'line-through':'none',
                color: completed ? '#333333' : 'white',
                float: "left",
                width: "90%"
            }}
            onClick={onToggle}
        >
        {name}
        </span>
        <span 
            style={{ 
                float: "right",
                width: "10%"
            }}
            onClick={onDelete}
        >
         X
        </span>
    </li>
);

export default TodoItem;