import React,{useState} from 'react';

function TodoList(){
    const[todos , setTodos] = useState([ ]);
    const[newTodo  , setNewTodo] = useState('');

    const addTodo = () => {
        if (newTodo){
            setTodos([...todos,newTodo]);
            setNewTodo('');
        }
    }
    return (
        <div>
            <input type="text" onChange={(e) =>setNewTodo(e.target.value) } value={newTodo} />
            <button onClick={addTodo} >Ekle</button>
            {todos.map((todo,index) => (
                <li key={index} className="list-group-item">{todo}</li>
            )
        )}
        </div>
    )
}

export default TodoList;