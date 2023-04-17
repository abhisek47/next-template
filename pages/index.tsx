import Head from "next/head"

import { Layout } from "@/components/layout"
import Navigations from "@/components/navigations"
import Topbar from "@/components/topbar"

export default function IndexPage() {
  return (
    <Layout>
      <Head>
        <title>Velzon - Admin Dashboard</title>
        <meta
          name="description"
          content="Next.js template for building apps with Radix UI and Tailwind CSS"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* header */}
      <header>
        {/* topbar */}
        <Topbar />
        {/* navigations */}
        <Navigations />
      </header>
      {/* main */}
      
    </Layout>
  )
}
