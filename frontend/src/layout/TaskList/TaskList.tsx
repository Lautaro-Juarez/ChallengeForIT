import { useTaskContext } from "../../hooks/UseTaskContext"
import { Task } from "../../models/Task.model"

export const TaskList = () => {
    const { tasks } = useTaskContext()

    console.log(tasks);
    
    return (
        <div>
            <h1>TaskList</h1>
            <ul>
            {tasks?.map((task:Task) => (               
                <li key={task.id}>
                    {task.id} -- --  {task.title} --- {task.description} ---- {task.completed ?  '✅' : '❌'}--
                </li>
            ))}
            </ul>
           
        </div>
    )
}

