import Head from 'next/head'
import Link from 'next/link'
import React from 'react'

export default function Home() {
  return (
    <div>
      <Head>
        <title>NUS Museum</title>
      </Head>
      <h1>Welcome to the NUS Museum!</h1>
      <Link href="listings/first-listing">Click here to see our item!</Link>
    </div>
  )
}
