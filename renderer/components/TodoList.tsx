import { useState } from 'react'
import TodoItem from './TodoItem'
import { v4 as uuidv4 } from "uuid";

function TodoList() {
  const [tasks, setTasks] = useState([
    {key: uuidv4(), name: 'サンプルだよ'}
  ])

  const [name, setName] = useState('')

  const handleChange = (e) => {
    setName(e.target.value)
  }

  const addTask = () => {
    const task = {
      key: uuidv4(),
      name
    }
    setTasks([
      ...tasks,
      task
    ])
  }

  const removeTask = (key: string) => {
    setTasks(tasks.filter(task => task.key !== key))
  }

  const taskList = () => tasks.map(task => (
    <TodoItem
      key={task.key}
      task={task}
      removeTask={removeTask}
    />
  ))


  return (
    <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
      <div className="mb-4">
        <h1 className="text-grey-darkest">Todo List</h1>
        <div className="flex mt-4">
          <input onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker" placeholder="Add Todo" />
          <button onClick={addTask} className="flex-no-shrink p-2 border-2 rounded text-teal border-teal hover:text-white hover:bg-teal">Add</button>
        </div>
      </div>
      <div>
        {taskList()}
      </div>
    </div>
  )

}

export default TodoList
