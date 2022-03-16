import type { NextPage } from 'next'
import Head from 'next/head'
import MainMap from '../components/map/MainMap'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Sailorsguide</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <MainMap />
        </main>
    </div>
  )
}

export default Home
