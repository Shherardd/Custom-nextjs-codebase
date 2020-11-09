import s from '../pages/styles/404.module.scss'

  const error404 = () => {
      return (
      <div className={s.notFound}>
        <h1>404 - No se ha encontrado la pagina :(</h1>
      </div>
      )

  }

  export default error404