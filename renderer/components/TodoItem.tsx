import { Task } from '../interfaces'

type Props = {
  task: Task
  removeTask: any
}

const TodoItem = ({ task, removeTask}: Props) => (
  <div className="flex mb-4 items-center">
    <p className="w-full text-grey-darkest">
      {task.name}
    </p>
    <button className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-green border-green hover:bg-green">
      Done
    </button>
    <button onClick={() => removeTask(task.key)}className="flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red hover:text-white hover:bg-red">
      Remove
    </button>
  </div>
);

export default TodoItem
