import Home from "@/components/Home";
import Layout from "@/components/Layout";
import datasource from "@/data-layer";
import { CompanyApiResponse } from "@/services/companyService";
import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function HomePage({
  companies,
}: {
  companies: CompanyApiResponse;
}) {
  return (
    <>
      <Head>
        <title>Next Starter Home</title>
        <meta name="description" content="This is the demo page" />
      </Head>
      <Layout>
        <Home />
      </Layout>
    </>
  );
}
