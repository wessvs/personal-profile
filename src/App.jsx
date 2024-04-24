import Profile from "./components/Profile"
import './styles/globals.css'
import avatarWess from './assets/avatar.jfif'

function App() {
  return (
    <>
  <Profile 
    avatar={avatarWess} 
    name='Wessley Silva' 
    bio='Front End React Developer at Docsales'
    phone='+5511944565042' 
    email='wessley.silva@outlook.com.br' 
    githubUrl='https://github.com/wessvs' 
    linkedinUrl='https://www.linkedin.com/in/wessleysilva/' 
    twitterUrl='#'
   />
  </>
  )
}

export default App
