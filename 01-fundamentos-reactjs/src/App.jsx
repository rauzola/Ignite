import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";

import './global.css';

export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          <Post
            author="Raul Sigoli"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, perspiciatis! Dicta vero id enim ipsa nemo! Exercitationem beatae facere harum. Incidunt vero perferendis et tenetur nobis est beatae vitae dignissimos."
          />
          <Post
            author="Ruan Sigoli"
            content="Um post muito legal."
          />
        </main>
      </div>

    </>
  )
}


