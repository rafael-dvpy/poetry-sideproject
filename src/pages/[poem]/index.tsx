import Layout from "@/components/Layout";
import Head from "next/head";
import { useRouter } from "next/router";

export default function Poetry() {
  const router = useRouter();
  const { poem } = router.query;

  return (
    <>
      <Head>
        <title>poetry</title>
      </Head>
      <Layout>hello</Layout>
    </>
  );
}
