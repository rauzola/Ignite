import { Header } from "./components/Header";
import { Post } from "./Post";

import styles from "./App.module.css";

import './global.css';
import { Sidebar } from "./components/Sidebar";

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


