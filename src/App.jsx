import styles from './App.module.css';
import { Navbar } from './components/Navbar/Navbar.jsx';
import { Profile } from './components/Profile/Profile.jsx';
function App() {

  return (
   <div className={styles.App}>
    <Navbar/>
    <Profile/>
   </div>
  )
}

export default App
