import Head from 'next/head'
import {Inter} from 'next/font/google'
import Layout from "@/components/layout";
import Link from "next/link";

const inter = Inter({subsets: ['latin']})

export default function Home() {
    return (
        <Layout home={true}>
            <Head>
                <title>{"TracTruc - L'application pour tracker de trucs"}</title>
            </Head>
            <div className={"tabs"}>
                <div><Link href={"/dashboard"}>Suivi</Link></div>
                <div><Link href={"/calendar"}>Calendrier</Link></div>
                <div><Link href={"/recordList"}>Liste des suivis</Link></div>
            </div>
            <main>
                <div>
                    <p>Ici des objectifs avec des barres de progression</p>
                </div>
                <div>
                    <Link href={"/recordNew"}>Ajouter un truc</Link>
                </div>
            </main>
        </Layout>
    )
}
