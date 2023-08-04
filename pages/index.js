import Head from 'next/head'
import Header from '@components/HeaderSite'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>SreeSrinivasa</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to Sree Srinivasa" />
        <p className="description">
          Site yet to complete
        </p>
      </main>

      <Footer />
    </div>
  )
}
