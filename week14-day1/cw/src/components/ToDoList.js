import { useState } from 'react'

const ToDoList = (props) => {
    const [list, setList] = useState([])
    const [task, setTask] = useState('');

    const addTask = () => {
        list.push({ task: task });
        setList([...list]);
        setTask('');
    }

    const removeTask = (i) => {
        list.splice(i, 1);
        setList([...list]);
        setTask('');
    }
    return (
        <div>
            <h1>ToDo List</h1>
            Task:<input onChange={e => setTask(e.target.value)} value={task}/>
            <button onClick={addTask}>Add</button>
            <div>
                {
                    list.map((elem, i) => {
                        return (
                            <div>
                                {elem.task}
                                <button onClick={() => removeTask(i)}>X</button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ToDoList;