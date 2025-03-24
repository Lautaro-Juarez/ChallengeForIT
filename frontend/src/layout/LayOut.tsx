import { FaPlus } from "react-icons/fa"
import { TaskList } from "./TaskList/TaskList.tsx"
import styles from "./layout.module.css"
import { TaskForm } from "./TaskForm/TaskForm.tsx"
import { useState } from "react"
import { SearchBar } from "../components/SearchBar/SearchBar.tsx"


export const LayOut = () => {

    const [showForm, setShowForm] = useState(false)

    return (
            <div className={`${styles.layout_container} flex_center`}>
                <h1 className={styles.title}>Task List</h1>
                <SearchBar/>
                <TaskList />
             
                <small className={`${styles.add_task} flex_center`} >
                    <FaPlus onClick={() => setShowForm(true)} />
                </small>
                {showForm && <TaskForm closePop={setShowForm} />}
            </div>
    )
}


