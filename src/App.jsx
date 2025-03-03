import styles from './App.module.css';
import { Navbar } from './components/Navbar/Navbar.jsx';
import { Profile } from './components/Profile/Profile.jsx';
import {About } from './components/About/About.jsx';
import {Experience} from './components/Experience/Experience.jsx';
import { Contact } from './components/Contact/Contact.jsx';
function App() {

  return (
   <div className={styles.App}>
    <Navbar/>
    <Profile/>
    <About/>
    <Experience/>
    <Contact/>
   </div>
  )
}

export default App
