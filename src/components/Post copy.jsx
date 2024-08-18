import { format, formatDistanceToNow } from "date-fns";
import ptBR from 'date-fns/locale/pt-BR';

import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';
import { useState } from "react";

export function Post({ author, publishedAt, content }){
   const [comments, setComments] = useState([
      1,
      2,
   ])

   function handleCreateNewComment(){
      event.preventDefault();
      setComments([...comments, comments.length + 1]);
   }

  return (
      <article className={styles.post}>
         <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
            <strong>Deixe seu feedback</strong>
            <textarea
            placeholder="Deixe um coomentário"
            />

            <footer>
               <button type='submit'>Publicar</button>
            </footer>
         </form>

         <div className={styles.commentList}>
            {comments.map(comment => {
               return <Comment />
            })}
         </div>
     </article>
  )
}