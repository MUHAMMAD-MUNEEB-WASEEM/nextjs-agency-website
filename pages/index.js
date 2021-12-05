import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import Intro from '../components/Intro'
import Navbar from '../components/Navbar'
import Services from '../components/Services'
import { data } from '../data'
import styles from '../styles/Home.module.css'

export default function Home({services}) {

  //console.log(services)

  return (
    <div>
      <Head>
        <title>Agency Website</title>
        <meta name="description" content="Made using Nextjs" />
      </Head>
      <Intro/>
      <Services services={services}/>
    </div>
  )
}

//Fetching data before rendering above components
//Below part should be done on that page where we 
//want to show that data, here we show cards on services page


export const getStaticProps = async () => {

  // if api
  //  const services =  await axios.get('/', req,res,)=>{

  // }

  //Static data from file
  const services = data

  return {
    props : { services }
  }

//Now we use these props immediately in this page as shown in home function above
//Pass these services props in services components and thus we can use this in services component
}