import { ChangeEvent, useState } from "react"
import { FaSearch } from "react-icons/fa"
import { useTaskContext } from "../../hooks/UseTaskContext"
import styles from "./search-bar.module.css"

export const SearchBar = () => {

    const [showBar, setShowBar] = useState<boolean>(false)
    const { searchTask } = useTaskContext()

    const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
        searchTask(e.target.value)
    }

    return (
        <div className={`${styles.search_bar_container} flex_center`}>
            <h4 className={styles.legend}>¿Querés encontrar una tarea? <FaSearch className={styles.icon} onClick={() => setShowBar(!showBar)}/></h4>
            {showBar && (<input
                type="text"
                name="search"
                placeholder="Encuentra una tarea por su titulo."
                onChange={handleSearch}
                className={styles.input_search}
            />)}
        </div>
    )
}

