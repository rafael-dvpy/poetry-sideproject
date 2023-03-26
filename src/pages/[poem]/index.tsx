import Layout from "@/components/Layout";
import Head from "next/head";
import { useRouter } from "next/router";
import { stringify } from "querystring";
import { useEffect, useState } from "react";
import { parse } from "node-html-parser";

export default function Poetry() {
  const router = useRouter();
  const { poem } = router.query;
  const [data, setData] = useState({
    title: "",
    done: "",
    poet: "",
    year: "",
  });
  const [content, setContent] = useState([[]]);
  const [filtered, setFiltered] = useState([""]);

  useEffect(() => {
    fetch("api/hello")
      .then((res) => res.json())
      .then((data) => {
        setContent(data[0].content);
        setData(data[0].data);
      });
  }, []);

  useEffect(() => {
    let appendable = [];
    for (let index = 0; index < content.length; index++) {
      const element1 = content[index];
      for (let index2 = 0; index2 < element1.length; index2++) {
        const element2 = element1[index2];
        appendable.push(element2);
        appendable.push("</br>");
      }
      appendable.push("</br>");
    }
    setFiltered(appendable);
  }, [content]);

  const text = filtered.join("");

  return (
    <>
      <Head>
        <title>{data.done == "" ? "Loading..." : data.title}</title>
      </Head>
      <Layout>
        <div className="flex flex-col justify-center">
          <div className="justify-center flex">
            <h1 className="text-4xl">{data.title}</h1>
          </div>
          <div className="flex justify-center mt-6">
            <div>
              <p dangerouslySetInnerHTML={{ __html: text }}></p>
              <p className="text-right">
                {data.poet} {data.year}
              </p>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
