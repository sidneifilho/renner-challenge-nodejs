import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Renner Challenge</title>
        <meta name="description" content="Renner challenge" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Renner NodeJS challenge</h1>
        <h2>Nesse teste devemos criar um BFF (Back-end for Front-end).</h2>

        <br />
        <h2>Tecnologias a serem usadas:</h2>
        <p>- NodeJS</p>
        <p>- Typescript</p>
        <p>- GraphQL</p>
        <p>- Swagger</p>
        <p></p>

        
        <br />
        <h2>Segue abaixo os requisitos do BFF:</h2>

        <p>1) Devemos criar endpoints para CRUD de clientes.</p>
        <p>2) Devemos criar endpoints para autenticacao e autorizacao dos clientes gerando tokens de acesso com tempo de expiracao pra ser usado pelo front-end.</p>
        <p>3) Devemos criar endpoints para CRUD de produtos. Essas endpoints só podem ser acessadas com os tokens gerados pela endpoints anterior. </p>
        <p>4) Devemos documentar no Swagger todas as endpoints.</p>
        <p>5) Criar testes unitarios e integrados para cobrir mais que 80%.</p>

        <br />
        <h1>IMPORTANTE :</h1>

        <h2>Após finalizar esse teste, deve enviar o link do github pros emails abaixo para avaliacao. </h2>
        <ul>
          <li> andre.massafra@lojasrenner.com.br </li>
          <li> felipe.rodrigues@lojasrenner.com.br </li>
          <li> sidnei.filho@lojasrenner.com.br </li>
          <li> christian.trajano@lojasrenner.com.br </li>
        </ul> 
      </main>

      <footer className={styles.footer}>
          Powered by Renner
      </footer>
    </div>
  )
}
