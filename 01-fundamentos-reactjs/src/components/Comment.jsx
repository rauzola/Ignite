import { Trash, ThumbsUp } from 'phosphor-react';
import styles from './Comment.module.css';

export function Comment() {
  return (
    <div className={styles.Comment}>
      <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/57502280?v=4" />

      <div className={styles.CommentBox}>
        <div className={styles.CommentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Raul Sigoli</strong>
              <time title="11 de Maio às 08:13h" dataTime="2022-05-11 08:13:30">Cerca de 1h atrás</time>
            </div>

            <button title="Deletar comentário">
              <Trash size={20} />
            </button>
          </header>

          <p>Muito bom Dev, parabéns!! </p>
        </div>
        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <apan>20</apan>
          </button>
        </footer>
      </div>

    </div>
  )
}