import Image from 'next/image'
import styles from './page.module.css'
import { Botoon } from './Boton'

export default function Home() {
  return (
    <main className={styles.main}>
      Hola wally
      <div>
         <Botoon></Botoon>
      </div>
    </main>
  )
}
