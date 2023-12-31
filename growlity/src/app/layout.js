import Head from 'next/head';
import { Inter } from 'next/font/google'
import "bootstrap/dist/css/bootstrap.css";
import "./remixicon.css"
import './globals.css'
import Header from './componants/Header';
import Footer from './componants/Footer';

const inter = Inter({ subsets: ['latin']})

export const metadata = {
  title: 'Drowlity',
  description: "Let's grow together",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.png" sizes="any" />
      </Head>
      <body className={inter.className}>
        <Header/>
          {children}
        <Footer/>
      </body>
    </html>
  )
}
