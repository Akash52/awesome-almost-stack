import React from "react"
import Layout from "./../components/layout"
import Join from "./../components/join"

export default function Home({ location }) {
  return (
    <Layout>
      <Join location={location} />
    </Layout>
  )
}
