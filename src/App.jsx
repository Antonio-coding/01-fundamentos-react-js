import { Post } from "./Post"
import { Header } from "./componets/Header"

import styles from './App.module.css';

import './global.css'
import { Sidebar } from './componets/Sidebar';


export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Thiago Neto"
            title="ReactJS - 10 conceitos básicos para iniciantes"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio et ante tincidunt tempus."
          />
          <Post
            author="Jonh Doe"
            title="Vamos falar sobre lorem"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio et ante tincidunt tempus."
          />
        </main>
      </div>
    </div >
  )
}

