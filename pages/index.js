import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <h1>Welcome to the NUS Museum!</h1>
      <Link href="listings/first-listing">Click here to see our item!</Link>
    </div>
  )
}
