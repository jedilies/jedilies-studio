import Head from "next/head";
import Navbar from "./Navbar";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Head>
        <title>JediLies</title>
      </Head>
      <Navbar/>

      <main>
        {children}
      </main>

    </>
  );
}

export default Layout;