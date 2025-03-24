import { useTaskContext } from "../../hooks/UseTaskContext"
import styles from "./task-list.module.css"
import { Task } from "../../models/Task.model"
import { TaskCard } from "./components/TaskCard/TaskCard"


export const TaskList = () => {
    const { tasks, searched } = useTaskContext()

    return (
        <section className={styles.task_list_container}>
            <ul className={styles.card_list}>
                {!searched.error ? (
                    searched.data.map((task: Task) => <TaskCard key={task.id} {...task} />)
                ) : (
                    <>
                        <h3>No se encontraron tareas con ese nombre</h3>
                        
                        <div className={styles.divition_bar}>
                            <div className={`${styles.line} flex_center`}>
                                <small className={styles.legend}>
                                    otras tareas
                                </small>
                            </div>
                        </div>
                    </>
                )}
                {searched.data.length === 0 && tasks?.error && <h3>Aún no hay tareas</h3>}
                {searched.data.length === 0 && !tasks?.error &&
                    tasks?.data?.map((task: Task) => <TaskCard key={task.id} {...task} />)
                }
            </ul>
        </section>
    )
}

