import Head from "next/head";
import Layout from "@/components/Layout";
import Link from "next/link";

const lorem = [
  "Lorem Ipsum",
  "Lorem Ipsum",
  "Lorem Ipsum",
  "Lorem Ipsum",
  "Lorem Ipsum",
  "Lorem Ipsum",
  "Lorem Ipsum",
  "Lorem Ipsum",
  "Lorem Ipsum",
  "Lorem Ipsum",
  "Lorem Ipsum",
  "Lorem Ipsum",
  "Lorem Ipsum",
  "Lorem Ipsum",
  "Lorem Ipsum",
  "Lorem Ipsum",
];

const mappedLorem = lorem.map((value, index) => {
  return (
    <Link key={index} href={"/"}>
      <div className="border-b-2 m-3 p-2">
        <h3 className="text-center">{value}</h3>
      </div>
    </Link>
  );
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Title</title>
      </Head>
      <Layout>
        <div className="flex justify-center">
          <div className="grid grid-cols-4">{mappedLorem}</div>
        </div>
      </Layout>
    </>
  );
}
