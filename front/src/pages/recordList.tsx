import Head from "next/head";
import Layout from "@/components/layout";

export default function recordList() {
  return (
    <Layout>
      <Head>
        <title>{"TracTruc - Calendrier"}</title>
      </Head>
      <main>Liste des actions suivies</main>
    </Layout>
  );
}
