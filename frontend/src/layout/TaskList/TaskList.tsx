import { useTaskContext } from "../../hooks/UseTaskContext"
import styles from './task-list.module.css'
import { Task } from "../../models/Task.model"
import { TaskCard } from "./components/TaskCard/TaskCard"


export const TaskList = () => {
    const { tasks } = useTaskContext()

    return (
        <section className={styles.task_list_container}>
            <ul className={styles.card_list}>
                {tasks?.map((task: Task) => (
                    <TaskCard key={task.id} {...task} />
                ))}
            </ul>
        </section>
    )
}

