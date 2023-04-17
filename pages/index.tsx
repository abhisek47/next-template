import Head from "next/head"
import { ChevronRight } from "lucide-react"

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
        <link
          rel="icon"
          href="https://themesbrand.com/velzon/html/saas/assets/images/favicon.ico"
        />
      </Head>
      {/* header */}
      <header className="sticky top-0 z-50">
        {/* topbar */}
        <Topbar />
        {/* navigations */}
        <Navigations />
      </header>
      {/* main */}
      <main>
        {/* breadcurms */}
        <section className="mx-auto w-full p-3 lg:w-11/12">
          <div className="flex items-center justify-between gap-4 py-2">
            <div>
              <p className="text-sm font-semibold">ANALYTICS</p>
            </div>
            <div className="flex items-center space-x-3 text-slate-500">
              <p className="text-xs font-medium">Dashboards</p>
              <ChevronRight size={18} />
              <p className="text-xs font-medium">Analytics</p>
            </div>
          </div>
        </section>
        {/* analytics */}
        <section className="mx-auto w-full p-3 lg:w-11/12"></section>
      </main>
    </Layout>
  )
}
