import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import Intro from '../components/Intro'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Agency Website</title>
        <meta name="description" content="Made using Nextjs" />
      </Head>
      <Intro/>
    </div>
  )
}
