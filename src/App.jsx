
import './App.css'
import AboutUs from './component/AboutUs/AboutUs'
import Footer from './component/Footer/Footer'
import Home from './component/Home/Home'
import Portfolio from './component/Portfolio/Portfolio'
import Skills from './component/Skills/Skills'
import ToDoList from  './component/ToDoList/ToDoList'
import SignUp from './component/SignUp/SignUp'
import Login from './component/Login/Login'
function App() {

  return (
    <>

    <Home />
    <ToDoList />
    <SignUp/>
    <Login/>
    <AboutUs/>
    <Skills/>
    <Portfolio/>
    <Footer />
    
    </>
  )
}

export default App
