import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Shop title</title>
        <meta name="description" content="Shop description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h2 className="text-2xl">Nextjs baby </h2>
    </div>
  );
}
