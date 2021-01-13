
import Head from 'next/head'
import Navbar from '../layout/Navbar'

export default function Home() {
   return (
      <div>
         <Head>
            <title>Landing Easy Bank</title>
            <link rel="icon" href="/favicon-32x32.png" />
            <link href="https://fonts.googleapis.com/css2?family=Public+Sans:wght@300;400;700&display=swap" rel="stylesheet" />
         </Head>

         <Navbar />

      </div>
   )
}
