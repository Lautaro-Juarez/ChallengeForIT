import { FaPencil } from "react-icons/fa6"
import styles from "./task-card.module.css"
import { Task } from "../../../../models/Task.model.tsx"
import { useState } from "react"
import { TaskForm } from "../../../TaskForm/TaskForm.tsx"
import { FaTrash } from "react-icons/fa"
import { useTaskContext } from "../../../../hooks/UseTaskContext.tsx"

export const TaskCard = (taskInfo: Task) => {

    const [showForm, setShowForm] = useState(false)

    const { updateTask, deleteTask } = useTaskContext()

    const handleCheckboxChange = async () => {
        const updatedTask = { ...taskInfo, completed: !taskInfo.completed };
        await updateTask(taskInfo.id, updatedTask);
    };

    return (
        <li className={styles.card_container}>
            <input className={styles.completed} type="checkbox" checked={taskInfo.completed}
                onChange={handleCheckboxChange}/>
            <article className={`${styles.about_task} flex_center`}>
                <h3 className={styles.title}>{taskInfo.title}</h3>
                <p className={styles.description}>{taskInfo.description}</p>
            </article>
            <article className={styles.task_state}>
                <small className={styles.edit_task} onClick={() => setShowForm(true)}>
                    <FaPencil />
                </small>
                <small className={styles.delete_task} onClick={async () => {
                    if (!window.confirm("¿Estás seguro de querer eliminar esta tarea?")) return
                    await deleteTask(taskInfo.id)
                }}>
                    <FaTrash />
                </small>
                <p className={styles.created}>12</p>
            </article>

            {showForm && <TaskForm editValues={taskInfo} closePop={setShowForm} />}
        </li>
    )
}

