import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
import Layout from "@/components/Layout";
import { Box, Container, Row } from "@/components/globals";
import Page from "@/components/globals/Page";
import Team from "@/components/ui-ux/Team";
import WorkWithUs from "@/components/ui-ux/WorkWithUs";
import Pricing from "@/components/ui-ux/Pricing";

const inter = Inter({ subsets: ["latin"] });

export default function TeamPage() {
  return (
    <>
      <Head>
        <title>Next Page Template</title>
        <meta name="description" content="This is the demo page" />
      </Head>
      <Page className={""} FULL={false}>
        <WorkWithUs />
        <Team />
        <Pricing />
      </Page>
    </>
  );
}
