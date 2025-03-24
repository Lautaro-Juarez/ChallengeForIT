import { LayOut } from "./layout/LayOut"
import styles from "./app.module.css"
import { TasksProvider } from "./context/TaskContext"

function App() {
  return (
    <main className={`${styles.container} flex_center`}>
      <TasksProvider>
        <LayOut />
      </TasksProvider>
    </main>
  )
}

export default App
