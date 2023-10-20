import { useEffect, useState } from 'react'
import { CartaoPost } from '../componentes/CartaoPost'
import { pegarPostsTempoReal } from '../servicos/firestore'
import styles from '../styles/Home.module.css'

export default function App() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    pegarPostsTempoReal(setPosts)
  }, [])

  return (
    <div>

      <div className={styles.postsArea}>
        {
          posts?.map(post => (
            <CartaoPost 
                key={post.id}
                id={post.id}
                titulo={post.titulo}
                fonte={post.fonte}
                descricao={post.descricao}
                imagem={post.imagemUrl}
              />
          ))
        }
      </div>

  
    </div>
  )
}