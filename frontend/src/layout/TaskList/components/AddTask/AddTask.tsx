import { FaX } from "react-icons/fa6"
import styles from "./add-task.module.css"
import { onValidate } from "../../../../utils/onValidate"
import { useFormTask } from "../../../../hooks/useFormTask"

type AddTaskProps = {
    closePop: (value: boolean) => void
}

export const AddTask = ({ closePop }: AddTaskProps, editValues?:any) => {

    const initialValues = {
        title: '',
        description: '',
        completed: false
    }

    const { errors, handleChange, handleSubmit } = useFormTask(initialValues, onValidate)

    return (
        <form className={`${styles.add_task_popup} flex_center`} onSubmit={handleSubmit}>
            <small className={styles.close_pop} onClick={() => closePop(false)}><FaX /></small>

            <label className={styles.form_task}>titulo</label>
            <input type="text" name="title" className={styles.task_title} placeholder="Título de la tarea" onChange={handleChange} />
            {errors.title && <small className={styles.error_message} >{errors.title}</small>}

            <label className={styles.form_task}>descripción</label>
            <textarea className={styles.task_description} name="description" placeholder="Descripción de la tarea" onChange={handleChange} />
            {errors.description && <small className={styles.error_message} >{errors.description}</small>}

            <button className={`${styles.add_button} flex_center`}>
                Agregar tarea
            </button>
        </form>
    )
}
