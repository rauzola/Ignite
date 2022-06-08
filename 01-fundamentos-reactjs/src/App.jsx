import { Header } from "./components/Header";
import { Post } from "./Post";

import './global.css';

export function App() {
  return (
    <>
    <Header />
      <h1>Hello World</h1>
      <Post 
        author="Raul Sigoli" 
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, perspiciatis! Dicta vero id enim ipsa nemo! Exercitationem beatae facere harum. Incidunt vero perferendis et tenetur nobis est beatae vitae dignissimos." 
      />
      <Post 
        author="Ruan Sigoli" 
        content="Um post muito legal."
      />
    </>
  )
}


