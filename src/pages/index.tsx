import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Layout from "@/components/Layout";

const inter = Inter({ subsets: ["latin"] });

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
    <div className="border-b-2 m-3 p-2" key={index}>
      <h3 className="text-center">{value}</h3>
    </div>
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
