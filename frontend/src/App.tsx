import { LayOut } from "./layout/LayOut"
import styles from './app.module.css'

function App() {
  return (
    <main className={`${styles.container} flex_center`}>
      <h1 className={styles.title}>Challenge forIT</h1> 
      <LayOut />
    </main>
  )
}

export default App
