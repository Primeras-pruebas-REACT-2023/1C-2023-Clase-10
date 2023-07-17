import Image from 'next/image'
import styles from './page.module.css'
import Botoon from './Componentes/Boton'
import Ta_lindo from './Componentes/Saludo'

export default function Home() {
  return (
    <main className={styles.main}>
       <div>
         <Ta_lindo texto = "Wally!" numero = "39"></Ta_lindo>
      </div>
      Hola wally
      <div>
         <Botoon></Botoon>
      </div>
    </main>
  )
}
