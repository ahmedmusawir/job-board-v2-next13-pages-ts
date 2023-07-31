import { Inter } from "next/font/google";
import Head from "next/head";
import Page from "@/components/globals/Page";
import Blog from "@/components/ui-ux/Blog";
import BlogCTA from "@/components/ui-ux/BlogCTA";

const inter = Inter({ subsets: ["latin"] });

export default function BlogPage() {
  return (
    <>
      <Head>
        <title>Next Page Template</title>
        <meta name="description" content="This is the demo page" />
      </Head>
      {/* <Container className={"border border-gray-500"} FULL={false}> */}
      <Page className={""} FULL={false}>
        <Blog />
        <BlogCTA />
      </Page>
    </>
  );
}
