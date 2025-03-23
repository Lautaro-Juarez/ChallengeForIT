import { FaPencil } from "react-icons/fa6"
import styles from "./task-card.module.css"
import { Task } from "../../../../models/Task.model.tsx"
import { useState } from "react"
import { TaskForm } from "../../../TaskForm/TaskForm.tsx"


export const TaskCard = (taskInfo: Task) => {
    const [EditPop, setEditPop] = useState<boolean>(false)

    return (
        <li className={styles.card_container}>
            <article className={`${styles.about_task} flex_center`}>
                <h3 className={styles.title}>{taskInfo.title}</h3>
                <p className={styles.description}>{taskInfo.description}</p>
            </article>
            <article className={styles.task_state}>    
                <input className={styles.completed} type="checkbox" checked={taskInfo.completed}/>
                <small className={styles.edit_task} onClick={() => setEditPop(true)}>
                    <FaPencil />
                </small>
                <p className={styles.created}>12</p>
            </article>
            
            {EditPop && <TaskForm closePop={setEditPop} editValues={taskInfo} />}
        </li>
    )
}

