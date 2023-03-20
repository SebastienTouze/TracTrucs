import Head from "next/head";
import Layout from "@/components/layout";

export default function dashboard() {
    return (
        <Layout home={false}>
            <Head>
                <title>{"TracTruc - Dashboard"}</title>
            </Head>
            <main>
                Dashboard
            </main>
        </Layout>
    )
}