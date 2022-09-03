import Link from 'next/link'
import React from 'react'
import Layout from '../components/layout'

export default function Home() {
  return (
    <Layout>
      <h1>Welcome to the NUS Museum!</h1>
      <Link href="listings/first-listing">Click here to see our item!</Link>
    </Layout>
  )
}
