import { FaX } from "react-icons/fa6"
import styles from "./task-form.module.css"
import { onValidate } from "../../utils/onValidate"
import { useFormTask } from "../../hooks/useFormTask"
import { CreateTask, Task } from "../../models/Task.model.tsx"



type AddTaskProps = {
    closePop: (value:boolean) => void, 
    editValues?: Task
}

export const TaskForm = ({closePop, editValues }: AddTaskProps) => {

    const initialValues: CreateTask = editValues ?? {
        title: "",
        description: "",
        completed: false,
    };

    const { form, loading, errors, handleChange, handleSubmit } = useFormTask(initialValues, onValidate, editValues);

    return (
        <form className={`${styles.add_task_popup} flex_center`} onSubmit={handleSubmit}>
            <small className={styles.close_pop} onClick={() => closePop(false)}><FaX /></small>

            <label className={styles.form_task}>titulo</label>
            <input
                type="text"
                name="title"
                className={styles.task_title}
                placeholder="Título de la tarea"
                onChange={handleChange}
                value={form.title}
            />
            {errors.title && <small className={styles.error_message} >{errors.title}</small>}

            <label className={styles.form_task}>descripción</label>
            <textarea
                className={styles.task_description}
                name="description"
                placeholder="Descripción de la tarea"
                onChange={handleChange}
                value={form.description}
            />
            {errors.description && <small className={styles.error_message} >{errors.description}</small>}

            <button className={`${styles.add_button} flex_center`} disabled={loading}>
                {loading ? "Guardando..." : editValues ? "Actualizar tarea" : "Agregar tarea"}
            </button>
        </form>
    )
}
